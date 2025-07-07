import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

const auth = new google.auth.GoogleAuth({
  keyFile: 'service-account.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

app.get('/api/sheet', async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Data!A1:AH9731', // Ajusta el nombre y rango de la hoja
    });

    const [headers, ...rows] = response.data.values;

    const data = rows.map(row =>
      headers.reduce((obj, key, i) => {
        obj[key] = row[i] || '';
        return obj;
      }, {})
    );

    res.json(data);
  } catch (error) {
    console.error('Error fetching sheet:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`);
});
