export type EvaluateData = {
  code_product: string;
  text: string;
  evaluate_product: number;
  evaluate_ship: number;
  evaluate_progress: number;
  images: ImageEvaluate[] | null;
  code_order: string;
};
export type ImageEvaluate = {
  code: string;
  url: string;
};

export type EvaluateState = {
  dataAddEvaluate: {
    loading: boolean;
    error: any | null;
    message: string | null;
  };
  dataCheckEvaluate: {
    loading: boolean;
    error: any;
    message: any;
  };
  dataEvaluateProduct: {
    data: any | null;
    loading: boolean;
    error: any;
  };
};

export type EvaluateDataCheck = {
  code_product: string;
  code_order: string;
};

export type EvaluateProductCheck = {
  code_product: string;
  is_evaluate: boolean;
};
