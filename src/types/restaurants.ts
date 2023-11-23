export type TSchedule = {
  type: number;
  weekday: number;
  allDay: boolean;
  startHour: string;
  stopHour: string;
};

export type TCuisine = {
  id: number;
  title: string;
};

export type TUserImage = {
  id: number;
  description: string | null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: string;
  userType: string;
};

export type TRestaurant = {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: TSchedule[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: any[]; // Adjust this based on the actual data
  restaurantTypes: any[]; // Adjust this based on the actual data
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: string;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: string | null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: any[]; // Adjust this based on the actual data
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: TCuisine[];
  preOrderEnabled: boolean;
  preorderToday: {
    weekday: string;
    name: string;
    startHour: string;
    intervals: any[] | null; // Adjust this based on the actual data
  };
  vendorType: string;
  childType: string;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  is_pro: boolean;
  has_first_coupon: boolean;
  userImage: TUserImage[];
  menuImage: any[]; // Adjust this based on the actual data
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: string;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: string | null;
  cpc_campaign_hash: string | null;
  cpc_spot: string | null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  vendor_status: string | null;
  status_title: string;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
  new_type: string;
  new_type_title: string;
  is_eco: boolean;
};

export type TFilter = {
  image: string | null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  description?: string;
  open: boolean;
  exclude_in_pickup: boolean;
  suggest?: boolean;
  badge?: string;
  suggested_sort?: number;
};

export type TSection = {
  section_name: string;
  section_name_fa: string;
  data: TFilter[];
  description?: string;
  open: boolean;
  suggest: boolean;
  exclude_in_pickup: boolean;
};

export type TTopData = {
  image: string | null;
  title: string;
  value: string;
  single_choice: true;
  selected: boolean;
  kind: string;
  open: boolean;
  exclude_in_pickup: boolean;
};

export type TExtraSections = {
  categories: {
    single_choice: boolean;
    data: any[]; // This could be a more specific export type  if data is expected to have a certain structure
    open: boolean;
  };
  filters: {
    sections: TSection[];
    top: {
      open: boolean;
      data: TTopData[];
    };
  };
  pickup: {
    active: boolean;
    filter_text: string;
    is_new: boolean;
    open: boolean;
  };
  render_type: number;
};

export type MetaTags = {
  header: string;
  title: string;
  description: string;
};

export type MainData = {
  count: number;
  open_count: number;
  finalResult: { type: "VENDOR" | "TEXT"; data: TRestaurant }[]; // Adjust this based on the actual data structure
  extra_sections: TExtraSections;
  meta_tags: MetaTags;
};

export type TApiResponse = {
  render_type: number;
  status: boolean;
  data: MainData;
};
