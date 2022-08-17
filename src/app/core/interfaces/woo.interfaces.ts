export interface WooInterface {
  billing_address:         IngAddress;
  coupons:                 any[];
  errors:                  any[];
  extensions:              Extensions;
  fees:                    any[];
  generated_timestamp:     number;
  has_calculated_shipping: boolean;
  items:                   Item[];
  items_count:             number;
  items_weight:            number;
  needs_payment:           boolean;
  needs_shipping:          boolean;
  payment_requirements:    string[];
  shipping_address:        IngAddress;
  shipping_rates:          any[];
  totals:                  RootObjectTotals;
}

export interface IngAddress {
  address_1:  string;
  address_2:  string;
  city:       string;
  company:    string;
  country:    string;
  email?:     string;
  first_name: string;
  last_name:  string;
  phone?:     string;
  postcode:   string;
  state:      string;
}

export interface Extensions {
}

export interface Item {
  backorders_allowed:   boolean;
  catalog_visibility:   string;
  description:          string;
  extensions:           Extensions;
  id:                   number;
  images:               Image[];
  item_data:            any[];
  key:                  string;
  low_stock_remaining:  null;
  name:                 string;
  permalink:            string;
  prices:               Prices;
  quantity:             number;
  quantity_limit:       number;
  short_description:    string;
  show_backorder_badge: boolean;
  sku:                  string;
  sold_individually:    boolean;
  totals:               ItemTotals;
  variation:            Variation[];
}

export interface Image {
  alt:       string;
  id:        number;
  name:      string;
  sizes:     string;
  src:       string;
  srcset:    string;
  thumbnail: string;
}

export interface Prices {
  currency_code:               string;
  currency_decimal_separator:  string;
  currency_minor_unit:         number;
  currency_prefix:             string;
  currency_suffix:             string;
  currency_symbol:             string;
  currency_thousand_separator: string;
  price:                       string;
  price_range:                 null;
  raw_prices:                  RawPrices;
  regular_price:               string;
  sale_price:                  string;
}

export interface RawPrices {
  precision:     number;
  price:         string;
  regular_price: string;
  sale_price:    string;
}

export interface ItemTotals {
  currency_code:               string;
  currency_decimal_separator:  string;
  currency_minor_unit:         number;
  currency_prefix:             string;
  currency_suffix:             string;
  currency_symbol:             string;
  currency_thousand_separator: string;
  line_subtotal:               string;
  line_subtotal_tax:           string;
  line_total:                  string;
  line_total_tax:              string;
}

export interface Variation {
  attribute: string;
  value:     string;
}

export interface RootObjectTotals {
  currency_code:               string;
  currency_decimal_separator:  string;
  currency_minor_unit:         number;
  currency_prefix:             string;
  currency_suffix:             string;
  currency_symbol:             string;
  currency_thousand_separator: string;
  tax_lines:                   any[];
  total_discount:              string;
  total_discount_tax:          string;
  total_fees:                  string;
  total_fees_tax:              string;
  total_items:                 string;
  total_items_tax:             string;
  total_price:                 string;
  total_shipping:              string;
  total_shipping_tax:          string;
  total_tax:                   string;
}
