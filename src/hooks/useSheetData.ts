import { useEffect, useState } from 'react';

export interface SheetRow {
    check_OPS: string;
    ci_fiat_value: number;
    ci_lp: string;
    ci_lp_rate: number;
    ci_USDC_lp: number;
    ci_USDC_value: number;
    ci_zulu_rate: number;
    co_fiat_value: number;
    co_lp: string;
    co_lp_rate: number;
    co_usdc_value: number;
    co_zulu_rate: number;
    crypto_fiat: string;
    date: Date;
    destiny_country: string;
    destiny_currency: string;
    destiny_entity: string;
    earliest_month: string;
    fiat_part: string;
    fx_rate: string;
    hash_ci: string;
    hash_co: string;
    KAM: string;
    latest_kam: string;
    month: number;
    month_name: string;
    ops: string;
    origin_country: string;
    origin_currency: string;
    origin_entity: string;
    profit_margin: number;
    profit_value: number;
    time: Date;
    trx_id: string;
    trx_type: string;
    user: string;
    user_type: string;
    week_number: string;
    year: number;
    zulu_q: string;
}

export function useSheetData() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/sheet')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
