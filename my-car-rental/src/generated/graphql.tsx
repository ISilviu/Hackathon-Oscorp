import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "cars.body_type" */
export type Cars_Body_Type = {
  __typename?: 'cars_body_type';
  value: Scalars['String'];
};

/** aggregated selection of "cars.body_type" */
export type Cars_Body_Type_Aggregate = {
  __typename?: 'cars_body_type_aggregate';
  aggregate?: Maybe<Cars_Body_Type_Aggregate_Fields>;
  nodes: Array<Cars_Body_Type>;
};

/** aggregate fields of "cars.body_type" */
export type Cars_Body_Type_Aggregate_Fields = {
  __typename?: 'cars_body_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Body_Type_Max_Fields>;
  min?: Maybe<Cars_Body_Type_Min_Fields>;
};


/** aggregate fields of "cars.body_type" */
export type Cars_Body_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Body_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.body_type". All fields are combined with a logical 'AND'. */
export type Cars_Body_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Body_Type_Bool_Exp>>;
  _not?: InputMaybe<Cars_Body_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Body_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.body_type" */
export enum Cars_Body_Type_Constraint {
  /** unique or primary key constraint */
  BodyTypePkey = 'body_type_pkey'
}

export enum Cars_Body_Type_Enum {
  Hatchback = 'HATCHBACK',
  Sedan = 'SEDAN',
  Suv = 'SUV'
}

/** Boolean expression to compare columns of type "cars_body_type_enum". All fields are combined with logical 'AND'. */
export type Cars_Body_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Cars_Body_Type_Enum>;
  _in?: InputMaybe<Array<Cars_Body_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Cars_Body_Type_Enum>;
  _nin?: InputMaybe<Array<Cars_Body_Type_Enum>>;
};

/** input type for inserting data into table "cars.body_type" */
export type Cars_Body_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Body_Type_Max_Fields = {
  __typename?: 'cars_body_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Body_Type_Min_Fields = {
  __typename?: 'cars_body_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.body_type" */
export type Cars_Body_Type_Mutation_Response = {
  __typename?: 'cars_body_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Body_Type>;
};

/** on conflict condition type for table "cars.body_type" */
export type Cars_Body_Type_On_Conflict = {
  constraint: Cars_Body_Type_Constraint;
  update_columns?: Array<Cars_Body_Type_Update_Column>;
  where?: InputMaybe<Cars_Body_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.body_type". */
export type Cars_Body_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_body_type */
export type Cars_Body_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "cars.body_type" */
export enum Cars_Body_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "cars.body_type" */
export type Cars_Body_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.body_type" */
export enum Cars_Body_Type_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "cars.car" */
export type Cars_Car = {
  __typename?: 'cars_car';
  body_type: Cars_Body_Type_Enum;
  capacity: Scalars['Int'];
  car_brand: Cars_Car_Brand_Type_Enum;
  color: Scalars['String'];
  description: Scalars['String'];
  fuel_type: Cars_Fuel_Type_Enum;
  id: Scalars['uuid'];
  is_approval_required: Scalars['Boolean'];
  lender_id: Scalars['uuid'];
  location_id: Scalars['uuid'];
  plate_number: Scalars['String'];
  rate: Scalars['numeric'];
  status: Cars_Car_Status_Enum;
};

/** aggregated selection of "cars.car" */
export type Cars_Car_Aggregate = {
  __typename?: 'cars_car_aggregate';
  aggregate?: Maybe<Cars_Car_Aggregate_Fields>;
  nodes: Array<Cars_Car>;
};

/** aggregate fields of "cars.car" */
export type Cars_Car_Aggregate_Fields = {
  __typename?: 'cars_car_aggregate_fields';
  avg?: Maybe<Cars_Car_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cars_Car_Max_Fields>;
  min?: Maybe<Cars_Car_Min_Fields>;
  stddev?: Maybe<Cars_Car_Stddev_Fields>;
  stddev_pop?: Maybe<Cars_Car_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cars_Car_Stddev_Samp_Fields>;
  sum?: Maybe<Cars_Car_Sum_Fields>;
  var_pop?: Maybe<Cars_Car_Var_Pop_Fields>;
  var_samp?: Maybe<Cars_Car_Var_Samp_Fields>;
  variance?: Maybe<Cars_Car_Variance_Fields>;
};


/** aggregate fields of "cars.car" */
export type Cars_Car_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Car_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cars_Car_Avg_Fields = {
  __typename?: 'cars_car_avg_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cars.car". All fields are combined with a logical 'AND'. */
export type Cars_Car_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Car_Bool_Exp>>;
  _not?: InputMaybe<Cars_Car_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Car_Bool_Exp>>;
  body_type?: InputMaybe<Cars_Body_Type_Enum_Comparison_Exp>;
  capacity?: InputMaybe<Int_Comparison_Exp>;
  car_brand?: InputMaybe<Cars_Car_Brand_Type_Enum_Comparison_Exp>;
  color?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  fuel_type?: InputMaybe<Cars_Fuel_Type_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_approval_required?: InputMaybe<Boolean_Comparison_Exp>;
  lender_id?: InputMaybe<Uuid_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  plate_number?: InputMaybe<String_Comparison_Exp>;
  rate?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<Cars_Car_Status_Enum_Comparison_Exp>;
};

/** columns and relationships of "cars.car_brand_type" */
export type Cars_Car_Brand_Type = {
  __typename?: 'cars_car_brand_type';
  value: Scalars['String'];
};

/** aggregated selection of "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Aggregate = {
  __typename?: 'cars_car_brand_type_aggregate';
  aggregate?: Maybe<Cars_Car_Brand_Type_Aggregate_Fields>;
  nodes: Array<Cars_Car_Brand_Type>;
};

/** aggregate fields of "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Aggregate_Fields = {
  __typename?: 'cars_car_brand_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Car_Brand_Type_Max_Fields>;
  min?: Maybe<Cars_Car_Brand_Type_Min_Fields>;
};


/** aggregate fields of "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Car_Brand_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.car_brand_type". All fields are combined with a logical 'AND'. */
export type Cars_Car_Brand_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Car_Brand_Type_Bool_Exp>>;
  _not?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Car_Brand_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.car_brand_type" */
export enum Cars_Car_Brand_Type_Constraint {
  /** unique or primary key constraint */
  CarBrandTypePkey = 'car_brand_type_pkey'
}

export enum Cars_Car_Brand_Type_Enum {
  Audi = 'AUDI',
  Bmw = 'BMW',
  Dacia = 'DACIA'
}

/** Boolean expression to compare columns of type "cars_car_brand_type_enum". All fields are combined with logical 'AND'. */
export type Cars_Car_Brand_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Cars_Car_Brand_Type_Enum>;
  _in?: InputMaybe<Array<Cars_Car_Brand_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Cars_Car_Brand_Type_Enum>;
  _nin?: InputMaybe<Array<Cars_Car_Brand_Type_Enum>>;
};

/** input type for inserting data into table "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Car_Brand_Type_Max_Fields = {
  __typename?: 'cars_car_brand_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Car_Brand_Type_Min_Fields = {
  __typename?: 'cars_car_brand_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Mutation_Response = {
  __typename?: 'cars_car_brand_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Car_Brand_Type>;
};

/** on conflict condition type for table "cars.car_brand_type" */
export type Cars_Car_Brand_Type_On_Conflict = {
  constraint: Cars_Car_Brand_Type_Constraint;
  update_columns?: Array<Cars_Car_Brand_Type_Update_Column>;
  where?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.car_brand_type". */
export type Cars_Car_Brand_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_car_brand_type */
export type Cars_Car_Brand_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "cars.car_brand_type" */
export enum Cars_Car_Brand_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "cars.car_brand_type" */
export type Cars_Car_Brand_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.car_brand_type" */
export enum Cars_Car_Brand_Type_Update_Column {
  /** column name */
  Value = 'value'
}

/** unique or primary key constraints on table "cars.car" */
export enum Cars_Car_Constraint {
  /** unique or primary key constraint */
  CarPkey = 'car_pkey'
}

/** columns and relationships of "cars.car_images" */
export type Cars_Car_Images = {
  __typename?: 'cars_car_images';
  car_id: Scalars['uuid'];
  id: Scalars['uuid'];
  image_url: Scalars['String'];
};

/** aggregated selection of "cars.car_images" */
export type Cars_Car_Images_Aggregate = {
  __typename?: 'cars_car_images_aggregate';
  aggregate?: Maybe<Cars_Car_Images_Aggregate_Fields>;
  nodes: Array<Cars_Car_Images>;
};

/** aggregate fields of "cars.car_images" */
export type Cars_Car_Images_Aggregate_Fields = {
  __typename?: 'cars_car_images_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Car_Images_Max_Fields>;
  min?: Maybe<Cars_Car_Images_Min_Fields>;
};


/** aggregate fields of "cars.car_images" */
export type Cars_Car_Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Car_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.car_images". All fields are combined with a logical 'AND'. */
export type Cars_Car_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Car_Images_Bool_Exp>>;
  _not?: InputMaybe<Cars_Car_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Car_Images_Bool_Exp>>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.car_images" */
export enum Cars_Car_Images_Constraint {
  /** unique or primary key constraint */
  CarImagesPkey = 'car_images_pkey'
}

/** input type for inserting data into table "cars.car_images" */
export type Cars_Car_Images_Insert_Input = {
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Car_Images_Max_Fields = {
  __typename?: 'cars_car_images_max_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Car_Images_Min_Fields = {
  __typename?: 'cars_car_images_min_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.car_images" */
export type Cars_Car_Images_Mutation_Response = {
  __typename?: 'cars_car_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Car_Images>;
};

/** on conflict condition type for table "cars.car_images" */
export type Cars_Car_Images_On_Conflict = {
  constraint: Cars_Car_Images_Constraint;
  update_columns?: Array<Cars_Car_Images_Update_Column>;
  where?: InputMaybe<Cars_Car_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.car_images". */
export type Cars_Car_Images_Order_By = {
  car_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_car_images */
export type Cars_Car_Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.car_images" */
export enum Cars_Car_Images_Select_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url'
}

/** input type for updating data in table "cars.car_images" */
export type Cars_Car_Images_Set_Input = {
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.car_images" */
export enum Cars_Car_Images_Update_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url'
}

/** input type for incrementing numeric columns in table "cars.car" */
export type Cars_Car_Inc_Input = {
  capacity?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "cars.car" */
export type Cars_Car_Insert_Input = {
  body_type?: InputMaybe<Cars_Body_Type_Enum>;
  capacity?: InputMaybe<Scalars['Int']>;
  car_brand?: InputMaybe<Cars_Car_Brand_Type_Enum>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fuel_type?: InputMaybe<Cars_Fuel_Type_Enum>;
  id?: InputMaybe<Scalars['uuid']>;
  is_approval_required?: InputMaybe<Scalars['Boolean']>;
  lender_id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  plate_number?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Cars_Car_Status_Enum>;
};

/** aggregate max on columns */
export type Cars_Car_Max_Fields = {
  __typename?: 'cars_car_max_fields';
  capacity?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lender_id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  plate_number?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Cars_Car_Min_Fields = {
  __typename?: 'cars_car_min_fields';
  capacity?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lender_id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  plate_number?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "cars.car" */
export type Cars_Car_Mutation_Response = {
  __typename?: 'cars_car_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Car>;
};

/** on conflict condition type for table "cars.car" */
export type Cars_Car_On_Conflict = {
  constraint: Cars_Car_Constraint;
  update_columns?: Array<Cars_Car_Update_Column>;
  where?: InputMaybe<Cars_Car_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.car". */
export type Cars_Car_Order_By = {
  body_type?: InputMaybe<Order_By>;
  capacity?: InputMaybe<Order_By>;
  car_brand?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  fuel_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_approval_required?: InputMaybe<Order_By>;
  lender_id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  plate_number?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_car */
export type Cars_Car_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.car" */
export enum Cars_Car_Select_Column {
  /** column name */
  BodyType = 'body_type',
  /** column name */
  Capacity = 'capacity',
  /** column name */
  CarBrand = 'car_brand',
  /** column name */
  Color = 'color',
  /** column name */
  Description = 'description',
  /** column name */
  FuelType = 'fuel_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsApprovalRequired = 'is_approval_required',
  /** column name */
  LenderId = 'lender_id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  PlateNumber = 'plate_number',
  /** column name */
  Rate = 'rate',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "cars.car" */
export type Cars_Car_Set_Input = {
  body_type?: InputMaybe<Cars_Body_Type_Enum>;
  capacity?: InputMaybe<Scalars['Int']>;
  car_brand?: InputMaybe<Cars_Car_Brand_Type_Enum>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fuel_type?: InputMaybe<Cars_Fuel_Type_Enum>;
  id?: InputMaybe<Scalars['uuid']>;
  is_approval_required?: InputMaybe<Scalars['Boolean']>;
  lender_id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  plate_number?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Cars_Car_Status_Enum>;
};

/** columns and relationships of "cars.car_status" */
export type Cars_Car_Status = {
  __typename?: 'cars_car_status';
  value: Scalars['String'];
};

/** aggregated selection of "cars.car_status" */
export type Cars_Car_Status_Aggregate = {
  __typename?: 'cars_car_status_aggregate';
  aggregate?: Maybe<Cars_Car_Status_Aggregate_Fields>;
  nodes: Array<Cars_Car_Status>;
};

/** aggregate fields of "cars.car_status" */
export type Cars_Car_Status_Aggregate_Fields = {
  __typename?: 'cars_car_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Car_Status_Max_Fields>;
  min?: Maybe<Cars_Car_Status_Min_Fields>;
};


/** aggregate fields of "cars.car_status" */
export type Cars_Car_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Car_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.car_status". All fields are combined with a logical 'AND'. */
export type Cars_Car_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Car_Status_Bool_Exp>>;
  _not?: InputMaybe<Cars_Car_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Car_Status_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.car_status" */
export enum Cars_Car_Status_Constraint {
  /** unique or primary key constraint */
  CarStatusPkey = 'car_status_pkey'
}

export enum Cars_Car_Status_Enum {
  Available = 'AVAILABLE',
  Busy = 'BUSY',
  InService = 'IN_SERVICE',
  NotAvailable = 'NOT_AVAILABLE'
}

/** Boolean expression to compare columns of type "cars_car_status_enum". All fields are combined with logical 'AND'. */
export type Cars_Car_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Cars_Car_Status_Enum>;
  _in?: InputMaybe<Array<Cars_Car_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Cars_Car_Status_Enum>;
  _nin?: InputMaybe<Array<Cars_Car_Status_Enum>>;
};

/** input type for inserting data into table "cars.car_status" */
export type Cars_Car_Status_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Car_Status_Max_Fields = {
  __typename?: 'cars_car_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Car_Status_Min_Fields = {
  __typename?: 'cars_car_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.car_status" */
export type Cars_Car_Status_Mutation_Response = {
  __typename?: 'cars_car_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Car_Status>;
};

/** on conflict condition type for table "cars.car_status" */
export type Cars_Car_Status_On_Conflict = {
  constraint: Cars_Car_Status_Constraint;
  update_columns?: Array<Cars_Car_Status_Update_Column>;
  where?: InputMaybe<Cars_Car_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.car_status". */
export type Cars_Car_Status_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_car_status */
export type Cars_Car_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "cars.car_status" */
export enum Cars_Car_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "cars.car_status" */
export type Cars_Car_Status_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.car_status" */
export enum Cars_Car_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Cars_Car_Stddev_Fields = {
  __typename?: 'cars_car_stddev_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cars_Car_Stddev_Pop_Fields = {
  __typename?: 'cars_car_stddev_pop_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cars_Car_Stddev_Samp_Fields = {
  __typename?: 'cars_car_stddev_samp_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cars_Car_Sum_Fields = {
  __typename?: 'cars_car_sum_fields';
  capacity?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['numeric']>;
};

/** update columns of table "cars.car" */
export enum Cars_Car_Update_Column {
  /** column name */
  BodyType = 'body_type',
  /** column name */
  Capacity = 'capacity',
  /** column name */
  CarBrand = 'car_brand',
  /** column name */
  Color = 'color',
  /** column name */
  Description = 'description',
  /** column name */
  FuelType = 'fuel_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsApprovalRequired = 'is_approval_required',
  /** column name */
  LenderId = 'lender_id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  PlateNumber = 'plate_number',
  /** column name */
  Rate = 'rate',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Cars_Car_Var_Pop_Fields = {
  __typename?: 'cars_car_var_pop_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cars_Car_Var_Samp_Fields = {
  __typename?: 'cars_car_var_samp_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cars_Car_Variance_Fields = {
  __typename?: 'cars_car_variance_fields';
  capacity?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cars.easy_box" */
export type Cars_Easy_Box = {
  __typename?: 'cars_easy_box';
  id: Scalars['uuid'];
  location_id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "cars.easy_box" */
export type Cars_Easy_Box_Aggregate = {
  __typename?: 'cars_easy_box_aggregate';
  aggregate?: Maybe<Cars_Easy_Box_Aggregate_Fields>;
  nodes: Array<Cars_Easy_Box>;
};

/** aggregate fields of "cars.easy_box" */
export type Cars_Easy_Box_Aggregate_Fields = {
  __typename?: 'cars_easy_box_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Easy_Box_Max_Fields>;
  min?: Maybe<Cars_Easy_Box_Min_Fields>;
};


/** aggregate fields of "cars.easy_box" */
export type Cars_Easy_Box_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Easy_Box_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.easy_box". All fields are combined with a logical 'AND'. */
export type Cars_Easy_Box_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Easy_Box_Bool_Exp>>;
  _not?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Easy_Box_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.easy_box" */
export enum Cars_Easy_Box_Constraint {
  /** unique or primary key constraint */
  EasyBoxPkey = 'easy_box_pkey'
}

/** input type for inserting data into table "cars.easy_box" */
export type Cars_Easy_Box_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Easy_Box_Max_Fields = {
  __typename?: 'cars_easy_box_max_fields';
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Easy_Box_Min_Fields = {
  __typename?: 'cars_easy_box_min_fields';
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.easy_box" */
export type Cars_Easy_Box_Mutation_Response = {
  __typename?: 'cars_easy_box_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Easy_Box>;
};

/** on conflict condition type for table "cars.easy_box" */
export type Cars_Easy_Box_On_Conflict = {
  constraint: Cars_Easy_Box_Constraint;
  update_columns?: Array<Cars_Easy_Box_Update_Column>;
  where?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.easy_box". */
export type Cars_Easy_Box_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_easy_box */
export type Cars_Easy_Box_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.easy_box" */
export enum Cars_Easy_Box_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "cars.easy_box" */
export type Cars_Easy_Box_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.easy_box" */
export enum Cars_Easy_Box_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "cars.fuel_type" */
export type Cars_Fuel_Type = {
  __typename?: 'cars_fuel_type';
  value: Scalars['String'];
};

/** aggregated selection of "cars.fuel_type" */
export type Cars_Fuel_Type_Aggregate = {
  __typename?: 'cars_fuel_type_aggregate';
  aggregate?: Maybe<Cars_Fuel_Type_Aggregate_Fields>;
  nodes: Array<Cars_Fuel_Type>;
};

/** aggregate fields of "cars.fuel_type" */
export type Cars_Fuel_Type_Aggregate_Fields = {
  __typename?: 'cars_fuel_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Fuel_Type_Max_Fields>;
  min?: Maybe<Cars_Fuel_Type_Min_Fields>;
};


/** aggregate fields of "cars.fuel_type" */
export type Cars_Fuel_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Fuel_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.fuel_type". All fields are combined with a logical 'AND'. */
export type Cars_Fuel_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Fuel_Type_Bool_Exp>>;
  _not?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Fuel_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.fuel_type" */
export enum Cars_Fuel_Type_Constraint {
  /** unique or primary key constraint */
  FuelTypePkey = 'fuel_type_pkey'
}

export enum Cars_Fuel_Type_Enum {
  Diesel = 'DIESEL',
  Lpg = 'LPG',
  Petrol = 'PETROL'
}

/** Boolean expression to compare columns of type "cars_fuel_type_enum". All fields are combined with logical 'AND'. */
export type Cars_Fuel_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Cars_Fuel_Type_Enum>;
  _in?: InputMaybe<Array<Cars_Fuel_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Cars_Fuel_Type_Enum>;
  _nin?: InputMaybe<Array<Cars_Fuel_Type_Enum>>;
};

/** input type for inserting data into table "cars.fuel_type" */
export type Cars_Fuel_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Fuel_Type_Max_Fields = {
  __typename?: 'cars_fuel_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Fuel_Type_Min_Fields = {
  __typename?: 'cars_fuel_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.fuel_type" */
export type Cars_Fuel_Type_Mutation_Response = {
  __typename?: 'cars_fuel_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Fuel_Type>;
};

/** on conflict condition type for table "cars.fuel_type" */
export type Cars_Fuel_Type_On_Conflict = {
  constraint: Cars_Fuel_Type_Constraint;
  update_columns?: Array<Cars_Fuel_Type_Update_Column>;
  where?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.fuel_type". */
export type Cars_Fuel_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_fuel_type */
export type Cars_Fuel_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "cars.fuel_type" */
export enum Cars_Fuel_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "cars.fuel_type" */
export type Cars_Fuel_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.fuel_type" */
export enum Cars_Fuel_Type_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "cars.key" */
export type Cars_Key = {
  __typename?: 'cars_key';
  easybox_transaction_id: Scalars['String'];
  id: Scalars['uuid'];
  pickup_point: Scalars['uuid'];
  unlock_passcode: Scalars['String'];
};

/** aggregated selection of "cars.key" */
export type Cars_Key_Aggregate = {
  __typename?: 'cars_key_aggregate';
  aggregate?: Maybe<Cars_Key_Aggregate_Fields>;
  nodes: Array<Cars_Key>;
};

/** aggregate fields of "cars.key" */
export type Cars_Key_Aggregate_Fields = {
  __typename?: 'cars_key_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cars_Key_Max_Fields>;
  min?: Maybe<Cars_Key_Min_Fields>;
};


/** aggregate fields of "cars.key" */
export type Cars_Key_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Key_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cars.key". All fields are combined with a logical 'AND'. */
export type Cars_Key_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Key_Bool_Exp>>;
  _not?: InputMaybe<Cars_Key_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Key_Bool_Exp>>;
  easybox_transaction_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pickup_point?: InputMaybe<Uuid_Comparison_Exp>;
  unlock_passcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.key" */
export enum Cars_Key_Constraint {
  /** unique or primary key constraint */
  KeyPkey = 'key_pkey'
}

/** input type for inserting data into table "cars.key" */
export type Cars_Key_Insert_Input = {
  easybox_transaction_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  pickup_point?: InputMaybe<Scalars['uuid']>;
  unlock_passcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Key_Max_Fields = {
  __typename?: 'cars_key_max_fields';
  easybox_transaction_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_point?: Maybe<Scalars['uuid']>;
  unlock_passcode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Key_Min_Fields = {
  __typename?: 'cars_key_min_fields';
  easybox_transaction_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_point?: Maybe<Scalars['uuid']>;
  unlock_passcode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.key" */
export type Cars_Key_Mutation_Response = {
  __typename?: 'cars_key_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Key>;
};

/** on conflict condition type for table "cars.key" */
export type Cars_Key_On_Conflict = {
  constraint: Cars_Key_Constraint;
  update_columns?: Array<Cars_Key_Update_Column>;
  where?: InputMaybe<Cars_Key_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.key". */
export type Cars_Key_Order_By = {
  easybox_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pickup_point?: InputMaybe<Order_By>;
  unlock_passcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_key */
export type Cars_Key_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.key" */
export enum Cars_Key_Select_Column {
  /** column name */
  EasyboxTransactionId = 'easybox_transaction_id',
  /** column name */
  Id = 'id',
  /** column name */
  PickupPoint = 'pickup_point',
  /** column name */
  UnlockPasscode = 'unlock_passcode'
}

/** input type for updating data in table "cars.key" */
export type Cars_Key_Set_Input = {
  easybox_transaction_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  pickup_point?: InputMaybe<Scalars['uuid']>;
  unlock_passcode?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cars.key" */
export enum Cars_Key_Update_Column {
  /** column name */
  EasyboxTransactionId = 'easybox_transaction_id',
  /** column name */
  Id = 'id',
  /** column name */
  PickupPoint = 'pickup_point',
  /** column name */
  UnlockPasscode = 'unlock_passcode'
}

/**
 * location
 *
 *
 * columns and relationships of "cars.location"
 *
 */
export type Cars_Location = {
  __typename?: 'cars_location';
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['uuid'];
  lat: Scalars['numeric'];
  long: Scalars['numeric'];
  state: Scalars['String'];
};

/** aggregated selection of "cars.location" */
export type Cars_Location_Aggregate = {
  __typename?: 'cars_location_aggregate';
  aggregate?: Maybe<Cars_Location_Aggregate_Fields>;
  nodes: Array<Cars_Location>;
};

/** aggregate fields of "cars.location" */
export type Cars_Location_Aggregate_Fields = {
  __typename?: 'cars_location_aggregate_fields';
  avg?: Maybe<Cars_Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cars_Location_Max_Fields>;
  min?: Maybe<Cars_Location_Min_Fields>;
  stddev?: Maybe<Cars_Location_Stddev_Fields>;
  stddev_pop?: Maybe<Cars_Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cars_Location_Stddev_Samp_Fields>;
  sum?: Maybe<Cars_Location_Sum_Fields>;
  var_pop?: Maybe<Cars_Location_Var_Pop_Fields>;
  var_samp?: Maybe<Cars_Location_Var_Samp_Fields>;
  variance?: Maybe<Cars_Location_Variance_Fields>;
};


/** aggregate fields of "cars.location" */
export type Cars_Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cars_Location_Avg_Fields = {
  __typename?: 'cars_location_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cars.location". All fields are combined with a logical 'AND'. */
export type Cars_Location_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Location_Bool_Exp>>;
  _not?: InputMaybe<Cars_Location_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Location_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  long?: InputMaybe<Numeric_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.location" */
export enum Cars_Location_Constraint {
  /** unique or primary key constraint */
  LocationPkey = 'location_pkey'
}

/** columns and relationships of "cars.location_history" */
export type Cars_Location_History = {
  __typename?: 'cars_location_history';
  id: Scalars['uuid'];
  lat: Scalars['numeric'];
  long: Scalars['numeric'];
  rental_contract_id: Scalars['uuid'];
  timestamp: Scalars['date'];
};

/** aggregated selection of "cars.location_history" */
export type Cars_Location_History_Aggregate = {
  __typename?: 'cars_location_history_aggregate';
  aggregate?: Maybe<Cars_Location_History_Aggregate_Fields>;
  nodes: Array<Cars_Location_History>;
};

/** aggregate fields of "cars.location_history" */
export type Cars_Location_History_Aggregate_Fields = {
  __typename?: 'cars_location_history_aggregate_fields';
  avg?: Maybe<Cars_Location_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cars_Location_History_Max_Fields>;
  min?: Maybe<Cars_Location_History_Min_Fields>;
  stddev?: Maybe<Cars_Location_History_Stddev_Fields>;
  stddev_pop?: Maybe<Cars_Location_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cars_Location_History_Stddev_Samp_Fields>;
  sum?: Maybe<Cars_Location_History_Sum_Fields>;
  var_pop?: Maybe<Cars_Location_History_Var_Pop_Fields>;
  var_samp?: Maybe<Cars_Location_History_Var_Samp_Fields>;
  variance?: Maybe<Cars_Location_History_Variance_Fields>;
};


/** aggregate fields of "cars.location_history" */
export type Cars_Location_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Location_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cars_Location_History_Avg_Fields = {
  __typename?: 'cars_location_history_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cars.location_history". All fields are combined with a logical 'AND'. */
export type Cars_Location_History_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Location_History_Bool_Exp>>;
  _not?: InputMaybe<Cars_Location_History_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Location_History_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  long?: InputMaybe<Numeric_Comparison_Exp>;
  rental_contract_id?: InputMaybe<Uuid_Comparison_Exp>;
  timestamp?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars.location_history" */
export enum Cars_Location_History_Constraint {
  /** unique or primary key constraint */
  LocationHistoryPkey = 'location_history_pkey'
}

/** input type for incrementing numeric columns in table "cars.location_history" */
export type Cars_Location_History_Inc_Input = {
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "cars.location_history" */
export type Cars_Location_History_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  rental_contract_id?: InputMaybe<Scalars['uuid']>;
  timestamp?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Cars_Location_History_Max_Fields = {
  __typename?: 'cars_location_history_max_fields';
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  rental_contract_id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Cars_Location_History_Min_Fields = {
  __typename?: 'cars_location_history_min_fields';
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  rental_contract_id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "cars.location_history" */
export type Cars_Location_History_Mutation_Response = {
  __typename?: 'cars_location_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Location_History>;
};

/** on conflict condition type for table "cars.location_history" */
export type Cars_Location_History_On_Conflict = {
  constraint: Cars_Location_History_Constraint;
  update_columns?: Array<Cars_Location_History_Update_Column>;
  where?: InputMaybe<Cars_Location_History_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.location_history". */
export type Cars_Location_History_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  rental_contract_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_location_history */
export type Cars_Location_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.location_history" */
export enum Cars_Location_History_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  RentalContractId = 'rental_contract_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "cars.location_history" */
export type Cars_Location_History_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  rental_contract_id?: InputMaybe<Scalars['uuid']>;
  timestamp?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Cars_Location_History_Stddev_Fields = {
  __typename?: 'cars_location_history_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cars_Location_History_Stddev_Pop_Fields = {
  __typename?: 'cars_location_history_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cars_Location_History_Stddev_Samp_Fields = {
  __typename?: 'cars_location_history_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cars_Location_History_Sum_Fields = {
  __typename?: 'cars_location_history_sum_fields';
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
};

/** update columns of table "cars.location_history" */
export enum Cars_Location_History_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  RentalContractId = 'rental_contract_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate var_pop on columns */
export type Cars_Location_History_Var_Pop_Fields = {
  __typename?: 'cars_location_history_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cars_Location_History_Var_Samp_Fields = {
  __typename?: 'cars_location_history_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cars_Location_History_Variance_Fields = {
  __typename?: 'cars_location_history_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "cars.location" */
export type Cars_Location_Inc_Input = {
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "cars.location" */
export type Cars_Location_Insert_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  state?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cars_Location_Max_Fields = {
  __typename?: 'cars_location_max_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  state?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cars_Location_Min_Fields = {
  __typename?: 'cars_location_min_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  state?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cars.location" */
export type Cars_Location_Mutation_Response = {
  __typename?: 'cars_location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars_Location>;
};

/** on conflict condition type for table "cars.location" */
export type Cars_Location_On_Conflict = {
  constraint: Cars_Location_Constraint;
  update_columns?: Array<Cars_Location_Update_Column>;
  where?: InputMaybe<Cars_Location_Bool_Exp>;
};

/** Ordering options when selecting data from "cars.location". */
export type Cars_Location_Order_By = {
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars_location */
export type Cars_Location_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cars.location" */
export enum Cars_Location_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "cars.location" */
export type Cars_Location_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  state?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cars_Location_Stddev_Fields = {
  __typename?: 'cars_location_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cars_Location_Stddev_Pop_Fields = {
  __typename?: 'cars_location_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cars_Location_Stddev_Samp_Fields = {
  __typename?: 'cars_location_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cars_Location_Sum_Fields = {
  __typename?: 'cars_location_sum_fields';
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
};

/** update columns of table "cars.location" */
export enum Cars_Location_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  State = 'state'
}

/** aggregate var_pop on columns */
export type Cars_Location_Var_Pop_Fields = {
  __typename?: 'cars_location_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cars_Location_Var_Samp_Fields = {
  __typename?: 'cars_location_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cars_Location_Variance_Fields = {
  __typename?: 'cars_location_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cars.body_type" */
  delete_cars_body_type?: Maybe<Cars_Body_Type_Mutation_Response>;
  /** delete single row from the table: "cars.body_type" */
  delete_cars_body_type_by_pk?: Maybe<Cars_Body_Type>;
  /** delete data from the table: "cars.car" */
  delete_cars_car?: Maybe<Cars_Car_Mutation_Response>;
  /** delete data from the table: "cars.car_brand_type" */
  delete_cars_car_brand_type?: Maybe<Cars_Car_Brand_Type_Mutation_Response>;
  /** delete single row from the table: "cars.car_brand_type" */
  delete_cars_car_brand_type_by_pk?: Maybe<Cars_Car_Brand_Type>;
  /** delete single row from the table: "cars.car" */
  delete_cars_car_by_pk?: Maybe<Cars_Car>;
  /** delete data from the table: "cars.car_images" */
  delete_cars_car_images?: Maybe<Cars_Car_Images_Mutation_Response>;
  /** delete single row from the table: "cars.car_images" */
  delete_cars_car_images_by_pk?: Maybe<Cars_Car_Images>;
  /** delete data from the table: "cars.car_status" */
  delete_cars_car_status?: Maybe<Cars_Car_Status_Mutation_Response>;
  /** delete single row from the table: "cars.car_status" */
  delete_cars_car_status_by_pk?: Maybe<Cars_Car_Status>;
  /** delete data from the table: "cars.easy_box" */
  delete_cars_easy_box?: Maybe<Cars_Easy_Box_Mutation_Response>;
  /** delete single row from the table: "cars.easy_box" */
  delete_cars_easy_box_by_pk?: Maybe<Cars_Easy_Box>;
  /** delete data from the table: "cars.fuel_type" */
  delete_cars_fuel_type?: Maybe<Cars_Fuel_Type_Mutation_Response>;
  /** delete single row from the table: "cars.fuel_type" */
  delete_cars_fuel_type_by_pk?: Maybe<Cars_Fuel_Type>;
  /** delete data from the table: "cars.key" */
  delete_cars_key?: Maybe<Cars_Key_Mutation_Response>;
  /** delete single row from the table: "cars.key" */
  delete_cars_key_by_pk?: Maybe<Cars_Key>;
  /** delete data from the table: "cars.location" */
  delete_cars_location?: Maybe<Cars_Location_Mutation_Response>;
  /** delete single row from the table: "cars.location" */
  delete_cars_location_by_pk?: Maybe<Cars_Location>;
  /** delete data from the table: "cars.location_history" */
  delete_cars_location_history?: Maybe<Cars_Location_History_Mutation_Response>;
  /** delete single row from the table: "cars.location_history" */
  delete_cars_location_history_by_pk?: Maybe<Cars_Location_History>;
  /** delete data from the table: "review.car_review" */
  delete_review_car_review?: Maybe<Review_Car_Review_Mutation_Response>;
  /** delete single row from the table: "review.car_review" */
  delete_review_car_review_by_pk?: Maybe<Review_Car_Review>;
  /** delete data from the table: "review.review" */
  delete_review_review?: Maybe<Review_Review_Mutation_Response>;
  /** delete single row from the table: "review.review" */
  delete_review_review_by_pk?: Maybe<Review_Review>;
  /** delete data from the table: "review.review_images" */
  delete_review_review_images?: Maybe<Review_Review_Images_Mutation_Response>;
  /** delete single row from the table: "review.review_images" */
  delete_review_review_images_by_pk?: Maybe<Review_Review_Images>;
  /** delete data from the table: "review.user_review" */
  delete_review_user_review?: Maybe<Review_User_Review_Mutation_Response>;
  /** delete single row from the table: "review.user_review" */
  delete_review_user_review_by_pk?: Maybe<Review_User_Review>;
  /** delete data from the table: "transaction.rental_contract" */
  delete_transaction_rental_contract?: Maybe<Transaction_Rental_Contract_Mutation_Response>;
  /** delete single row from the table: "transaction.rental_contract" */
  delete_transaction_rental_contract_by_pk?: Maybe<Transaction_Rental_Contract>;
  /** delete data from the table: "transaction.rental_status" */
  delete_transaction_rental_status?: Maybe<Transaction_Rental_Status_Mutation_Response>;
  /** delete single row from the table: "transaction.rental_status" */
  delete_transaction_rental_status_by_pk?: Maybe<Transaction_Rental_Status>;
  /** delete data from the table: "transaction.transaction" */
  delete_transaction_transaction?: Maybe<Transaction_Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction.transaction" */
  delete_transaction_transaction_by_pk?: Maybe<Transaction_Transaction>;
  /** delete data from the table: "transaction.wallet" */
  delete_transaction_wallet?: Maybe<Transaction_Wallet_Mutation_Response>;
  /** delete single row from the table: "transaction.wallet" */
  delete_transaction_wallet_by_pk?: Maybe<Transaction_Wallet>;
  /** delete data from the table: "users.prefered_languages" */
  delete_users_prefered_languages?: Maybe<Users_Prefered_Languages_Mutation_Response>;
  /** delete single row from the table: "users.prefered_languages" */
  delete_users_prefered_languages_by_pk?: Maybe<Users_Prefered_Languages>;
  /** delete data from the table: "users.role_name" */
  delete_users_role_name?: Maybe<Users_Role_Name_Mutation_Response>;
  /** delete single row from the table: "users.role_name" */
  delete_users_role_name_by_pk?: Maybe<Users_Role_Name>;
  /** delete data from the table: "users.roles" */
  delete_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** delete single row from the table: "users.roles" */
  delete_users_roles_by_pk?: Maybe<Users_Roles>;
  /** delete data from the table: "users.user" */
  delete_users_user?: Maybe<Users_User_Mutation_Response>;
  /** delete single row from the table: "users.user" */
  delete_users_user_by_pk?: Maybe<Users_User>;
  /** delete data from the table: "users.user_roles" */
  delete_users_user_roles?: Maybe<Users_User_Roles_Mutation_Response>;
  /** delete single row from the table: "users.user_roles" */
  delete_users_user_roles_by_pk?: Maybe<Users_User_Roles>;
  /** insert data into the table: "cars.body_type" */
  insert_cars_body_type?: Maybe<Cars_Body_Type_Mutation_Response>;
  /** insert a single row into the table: "cars.body_type" */
  insert_cars_body_type_one?: Maybe<Cars_Body_Type>;
  /** insert data into the table: "cars.car" */
  insert_cars_car?: Maybe<Cars_Car_Mutation_Response>;
  /** insert data into the table: "cars.car_brand_type" */
  insert_cars_car_brand_type?: Maybe<Cars_Car_Brand_Type_Mutation_Response>;
  /** insert a single row into the table: "cars.car_brand_type" */
  insert_cars_car_brand_type_one?: Maybe<Cars_Car_Brand_Type>;
  /** insert data into the table: "cars.car_images" */
  insert_cars_car_images?: Maybe<Cars_Car_Images_Mutation_Response>;
  /** insert a single row into the table: "cars.car_images" */
  insert_cars_car_images_one?: Maybe<Cars_Car_Images>;
  /** insert a single row into the table: "cars.car" */
  insert_cars_car_one?: Maybe<Cars_Car>;
  /** insert data into the table: "cars.car_status" */
  insert_cars_car_status?: Maybe<Cars_Car_Status_Mutation_Response>;
  /** insert a single row into the table: "cars.car_status" */
  insert_cars_car_status_one?: Maybe<Cars_Car_Status>;
  /** insert data into the table: "cars.easy_box" */
  insert_cars_easy_box?: Maybe<Cars_Easy_Box_Mutation_Response>;
  /** insert a single row into the table: "cars.easy_box" */
  insert_cars_easy_box_one?: Maybe<Cars_Easy_Box>;
  /** insert data into the table: "cars.fuel_type" */
  insert_cars_fuel_type?: Maybe<Cars_Fuel_Type_Mutation_Response>;
  /** insert a single row into the table: "cars.fuel_type" */
  insert_cars_fuel_type_one?: Maybe<Cars_Fuel_Type>;
  /** insert data into the table: "cars.key" */
  insert_cars_key?: Maybe<Cars_Key_Mutation_Response>;
  /** insert a single row into the table: "cars.key" */
  insert_cars_key_one?: Maybe<Cars_Key>;
  /** insert data into the table: "cars.location" */
  insert_cars_location?: Maybe<Cars_Location_Mutation_Response>;
  /** insert data into the table: "cars.location_history" */
  insert_cars_location_history?: Maybe<Cars_Location_History_Mutation_Response>;
  /** insert a single row into the table: "cars.location_history" */
  insert_cars_location_history_one?: Maybe<Cars_Location_History>;
  /** insert a single row into the table: "cars.location" */
  insert_cars_location_one?: Maybe<Cars_Location>;
  /** insert data into the table: "review.car_review" */
  insert_review_car_review?: Maybe<Review_Car_Review_Mutation_Response>;
  /** insert a single row into the table: "review.car_review" */
  insert_review_car_review_one?: Maybe<Review_Car_Review>;
  /** insert data into the table: "review.review" */
  insert_review_review?: Maybe<Review_Review_Mutation_Response>;
  /** insert data into the table: "review.review_images" */
  insert_review_review_images?: Maybe<Review_Review_Images_Mutation_Response>;
  /** insert a single row into the table: "review.review_images" */
  insert_review_review_images_one?: Maybe<Review_Review_Images>;
  /** insert a single row into the table: "review.review" */
  insert_review_review_one?: Maybe<Review_Review>;
  /** insert data into the table: "review.user_review" */
  insert_review_user_review?: Maybe<Review_User_Review_Mutation_Response>;
  /** insert a single row into the table: "review.user_review" */
  insert_review_user_review_one?: Maybe<Review_User_Review>;
  /** insert data into the table: "transaction.rental_contract" */
  insert_transaction_rental_contract?: Maybe<Transaction_Rental_Contract_Mutation_Response>;
  /** insert a single row into the table: "transaction.rental_contract" */
  insert_transaction_rental_contract_one?: Maybe<Transaction_Rental_Contract>;
  /** insert data into the table: "transaction.rental_status" */
  insert_transaction_rental_status?: Maybe<Transaction_Rental_Status_Mutation_Response>;
  /** insert a single row into the table: "transaction.rental_status" */
  insert_transaction_rental_status_one?: Maybe<Transaction_Rental_Status>;
  /** insert data into the table: "transaction.transaction" */
  insert_transaction_transaction?: Maybe<Transaction_Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction.transaction" */
  insert_transaction_transaction_one?: Maybe<Transaction_Transaction>;
  /** insert data into the table: "transaction.wallet" */
  insert_transaction_wallet?: Maybe<Transaction_Wallet_Mutation_Response>;
  /** insert a single row into the table: "transaction.wallet" */
  insert_transaction_wallet_one?: Maybe<Transaction_Wallet>;
  /** insert data into the table: "users.prefered_languages" */
  insert_users_prefered_languages?: Maybe<Users_Prefered_Languages_Mutation_Response>;
  /** insert a single row into the table: "users.prefered_languages" */
  insert_users_prefered_languages_one?: Maybe<Users_Prefered_Languages>;
  /** insert data into the table: "users.role_name" */
  insert_users_role_name?: Maybe<Users_Role_Name_Mutation_Response>;
  /** insert a single row into the table: "users.role_name" */
  insert_users_role_name_one?: Maybe<Users_Role_Name>;
  /** insert data into the table: "users.roles" */
  insert_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** insert a single row into the table: "users.roles" */
  insert_users_roles_one?: Maybe<Users_Roles>;
  /** insert data into the table: "users.user" */
  insert_users_user?: Maybe<Users_User_Mutation_Response>;
  /** insert a single row into the table: "users.user" */
  insert_users_user_one?: Maybe<Users_User>;
  /** insert data into the table: "users.user_roles" */
  insert_users_user_roles?: Maybe<Users_User_Roles_Mutation_Response>;
  /** insert a single row into the table: "users.user_roles" */
  insert_users_user_roles_one?: Maybe<Users_User_Roles>;
  /** update data of the table: "cars.body_type" */
  update_cars_body_type?: Maybe<Cars_Body_Type_Mutation_Response>;
  /** update single row of the table: "cars.body_type" */
  update_cars_body_type_by_pk?: Maybe<Cars_Body_Type>;
  /** update data of the table: "cars.car" */
  update_cars_car?: Maybe<Cars_Car_Mutation_Response>;
  /** update data of the table: "cars.car_brand_type" */
  update_cars_car_brand_type?: Maybe<Cars_Car_Brand_Type_Mutation_Response>;
  /** update single row of the table: "cars.car_brand_type" */
  update_cars_car_brand_type_by_pk?: Maybe<Cars_Car_Brand_Type>;
  /** update single row of the table: "cars.car" */
  update_cars_car_by_pk?: Maybe<Cars_Car>;
  /** update data of the table: "cars.car_images" */
  update_cars_car_images?: Maybe<Cars_Car_Images_Mutation_Response>;
  /** update single row of the table: "cars.car_images" */
  update_cars_car_images_by_pk?: Maybe<Cars_Car_Images>;
  /** update data of the table: "cars.car_status" */
  update_cars_car_status?: Maybe<Cars_Car_Status_Mutation_Response>;
  /** update single row of the table: "cars.car_status" */
  update_cars_car_status_by_pk?: Maybe<Cars_Car_Status>;
  /** update data of the table: "cars.easy_box" */
  update_cars_easy_box?: Maybe<Cars_Easy_Box_Mutation_Response>;
  /** update single row of the table: "cars.easy_box" */
  update_cars_easy_box_by_pk?: Maybe<Cars_Easy_Box>;
  /** update data of the table: "cars.fuel_type" */
  update_cars_fuel_type?: Maybe<Cars_Fuel_Type_Mutation_Response>;
  /** update single row of the table: "cars.fuel_type" */
  update_cars_fuel_type_by_pk?: Maybe<Cars_Fuel_Type>;
  /** update data of the table: "cars.key" */
  update_cars_key?: Maybe<Cars_Key_Mutation_Response>;
  /** update single row of the table: "cars.key" */
  update_cars_key_by_pk?: Maybe<Cars_Key>;
  /** update data of the table: "cars.location" */
  update_cars_location?: Maybe<Cars_Location_Mutation_Response>;
  /** update single row of the table: "cars.location" */
  update_cars_location_by_pk?: Maybe<Cars_Location>;
  /** update data of the table: "cars.location_history" */
  update_cars_location_history?: Maybe<Cars_Location_History_Mutation_Response>;
  /** update single row of the table: "cars.location_history" */
  update_cars_location_history_by_pk?: Maybe<Cars_Location_History>;
  /** update data of the table: "review.car_review" */
  update_review_car_review?: Maybe<Review_Car_Review_Mutation_Response>;
  /** update single row of the table: "review.car_review" */
  update_review_car_review_by_pk?: Maybe<Review_Car_Review>;
  /** update data of the table: "review.review" */
  update_review_review?: Maybe<Review_Review_Mutation_Response>;
  /** update single row of the table: "review.review" */
  update_review_review_by_pk?: Maybe<Review_Review>;
  /** update data of the table: "review.review_images" */
  update_review_review_images?: Maybe<Review_Review_Images_Mutation_Response>;
  /** update single row of the table: "review.review_images" */
  update_review_review_images_by_pk?: Maybe<Review_Review_Images>;
  /** update data of the table: "review.user_review" */
  update_review_user_review?: Maybe<Review_User_Review_Mutation_Response>;
  /** update single row of the table: "review.user_review" */
  update_review_user_review_by_pk?: Maybe<Review_User_Review>;
  /** update data of the table: "transaction.rental_contract" */
  update_transaction_rental_contract?: Maybe<Transaction_Rental_Contract_Mutation_Response>;
  /** update single row of the table: "transaction.rental_contract" */
  update_transaction_rental_contract_by_pk?: Maybe<Transaction_Rental_Contract>;
  /** update data of the table: "transaction.rental_status" */
  update_transaction_rental_status?: Maybe<Transaction_Rental_Status_Mutation_Response>;
  /** update single row of the table: "transaction.rental_status" */
  update_transaction_rental_status_by_pk?: Maybe<Transaction_Rental_Status>;
  /** update data of the table: "transaction.transaction" */
  update_transaction_transaction?: Maybe<Transaction_Transaction_Mutation_Response>;
  /** update single row of the table: "transaction.transaction" */
  update_transaction_transaction_by_pk?: Maybe<Transaction_Transaction>;
  /** update data of the table: "transaction.wallet" */
  update_transaction_wallet?: Maybe<Transaction_Wallet_Mutation_Response>;
  /** update single row of the table: "transaction.wallet" */
  update_transaction_wallet_by_pk?: Maybe<Transaction_Wallet>;
  /** update data of the table: "users.prefered_languages" */
  update_users_prefered_languages?: Maybe<Users_Prefered_Languages_Mutation_Response>;
  /** update single row of the table: "users.prefered_languages" */
  update_users_prefered_languages_by_pk?: Maybe<Users_Prefered_Languages>;
  /** update data of the table: "users.role_name" */
  update_users_role_name?: Maybe<Users_Role_Name_Mutation_Response>;
  /** update single row of the table: "users.role_name" */
  update_users_role_name_by_pk?: Maybe<Users_Role_Name>;
  /** update data of the table: "users.roles" */
  update_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** update single row of the table: "users.roles" */
  update_users_roles_by_pk?: Maybe<Users_Roles>;
  /** update data of the table: "users.user" */
  update_users_user?: Maybe<Users_User_Mutation_Response>;
  /** update single row of the table: "users.user" */
  update_users_user_by_pk?: Maybe<Users_User>;
  /** update data of the table: "users.user_roles" */
  update_users_user_roles?: Maybe<Users_User_Roles_Mutation_Response>;
  /** update single row of the table: "users.user_roles" */
  update_users_user_roles_by_pk?: Maybe<Users_User_Roles>;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Body_TypeArgs = {
  where: Cars_Body_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Body_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_CarArgs = {
  where: Cars_Car_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_Brand_TypeArgs = {
  where: Cars_Car_Brand_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_Brand_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_ImagesArgs = {
  where: Cars_Car_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_StatusArgs = {
  where: Cars_Car_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Car_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Easy_BoxArgs = {
  where: Cars_Easy_Box_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Easy_Box_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Fuel_TypeArgs = {
  where: Cars_Fuel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Fuel_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_KeyArgs = {
  where: Cars_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Key_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_LocationArgs = {
  where: Cars_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cars_Location_HistoryArgs = {
  where: Cars_Location_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_Location_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Review_Car_ReviewArgs = {
  where: Review_Car_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_Car_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Review_ReviewArgs = {
  where: Review_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Review_Review_ImagesArgs = {
  where: Review_Review_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_Review_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Review_User_ReviewArgs = {
  where: Review_User_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_User_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Rental_ContractArgs = {
  where: Transaction_Rental_Contract_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Rental_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Rental_StatusArgs = {
  where: Transaction_Rental_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Rental_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_TransactionArgs = {
  where: Transaction_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_WalletArgs = {
  where: Transaction_Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Wallet_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Users_Prefered_LanguagesArgs = {
  where: Users_Prefered_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Prefered_Languages_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Users_Role_NameArgs = {
  where: Users_Role_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Role_Name_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Users_RolesArgs = {
  where: Users_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Users_UserArgs = {
  where: Users_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Users_User_RolesArgs = {
  where: Users_User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_User_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Cars_Body_TypeArgs = {
  objects: Array<Cars_Body_Type_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Body_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Body_Type_OneArgs = {
  object: Cars_Body_Type_Insert_Input;
  on_conflict?: InputMaybe<Cars_Body_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_CarArgs = {
  objects: Array<Cars_Car_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Car_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_Brand_TypeArgs = {
  objects: Array<Cars_Car_Brand_Type_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Car_Brand_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_Brand_Type_OneArgs = {
  object: Cars_Car_Brand_Type_Insert_Input;
  on_conflict?: InputMaybe<Cars_Car_Brand_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_ImagesArgs = {
  objects: Array<Cars_Car_Images_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Car_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_Images_OneArgs = {
  object: Cars_Car_Images_Insert_Input;
  on_conflict?: InputMaybe<Cars_Car_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_OneArgs = {
  object: Cars_Car_Insert_Input;
  on_conflict?: InputMaybe<Cars_Car_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_StatusArgs = {
  objects: Array<Cars_Car_Status_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Car_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Car_Status_OneArgs = {
  object: Cars_Car_Status_Insert_Input;
  on_conflict?: InputMaybe<Cars_Car_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Easy_BoxArgs = {
  objects: Array<Cars_Easy_Box_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Easy_Box_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Easy_Box_OneArgs = {
  object: Cars_Easy_Box_Insert_Input;
  on_conflict?: InputMaybe<Cars_Easy_Box_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Fuel_TypeArgs = {
  objects: Array<Cars_Fuel_Type_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Fuel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Fuel_Type_OneArgs = {
  object: Cars_Fuel_Type_Insert_Input;
  on_conflict?: InputMaybe<Cars_Fuel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_KeyArgs = {
  objects: Array<Cars_Key_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Key_OneArgs = {
  object: Cars_Key_Insert_Input;
  on_conflict?: InputMaybe<Cars_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_LocationArgs = {
  objects: Array<Cars_Location_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Location_HistoryArgs = {
  objects: Array<Cars_Location_History_Insert_Input>;
  on_conflict?: InputMaybe<Cars_Location_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Location_History_OneArgs = {
  object: Cars_Location_History_Insert_Input;
  on_conflict?: InputMaybe<Cars_Location_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_Location_OneArgs = {
  object: Cars_Location_Insert_Input;
  on_conflict?: InputMaybe<Cars_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Car_ReviewArgs = {
  objects: Array<Review_Car_Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_Car_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Car_Review_OneArgs = {
  object: Review_Car_Review_Insert_Input;
  on_conflict?: InputMaybe<Review_Car_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_ReviewArgs = {
  objects: Array<Review_Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Review_ImagesArgs = {
  objects: Array<Review_Review_Images_Insert_Input>;
  on_conflict?: InputMaybe<Review_Review_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Review_Images_OneArgs = {
  object: Review_Review_Images_Insert_Input;
  on_conflict?: InputMaybe<Review_Review_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Review_OneArgs = {
  object: Review_Review_Insert_Input;
  on_conflict?: InputMaybe<Review_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_User_ReviewArgs = {
  objects: Array<Review_User_Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_User_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_User_Review_OneArgs = {
  object: Review_User_Review_Insert_Input;
  on_conflict?: InputMaybe<Review_User_Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Rental_ContractArgs = {
  objects: Array<Transaction_Rental_Contract_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Rental_Contract_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Rental_Contract_OneArgs = {
  object: Transaction_Rental_Contract_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Rental_Contract_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Rental_StatusArgs = {
  objects: Array<Transaction_Rental_Status_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Rental_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Rental_Status_OneArgs = {
  object: Transaction_Rental_Status_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Rental_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_TransactionArgs = {
  objects: Array<Transaction_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Transaction_OneArgs = {
  object: Transaction_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_WalletArgs = {
  objects: Array<Transaction_Wallet_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Wallet_OneArgs = {
  object: Transaction_Wallet_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Prefered_LanguagesArgs = {
  objects: Array<Users_Prefered_Languages_Insert_Input>;
  on_conflict?: InputMaybe<Users_Prefered_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Prefered_Languages_OneArgs = {
  object: Users_Prefered_Languages_Insert_Input;
  on_conflict?: InputMaybe<Users_Prefered_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Role_NameArgs = {
  objects: Array<Users_Role_Name_Insert_Input>;
  on_conflict?: InputMaybe<Users_Role_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Role_Name_OneArgs = {
  object: Users_Role_Name_Insert_Input;
  on_conflict?: InputMaybe<Users_Role_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_RolesArgs = {
  objects: Array<Users_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Users_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Roles_OneArgs = {
  object: Users_Roles_Insert_Input;
  on_conflict?: InputMaybe<Users_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_UserArgs = {
  objects: Array<Users_User_Insert_Input>;
  on_conflict?: InputMaybe<Users_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_User_OneArgs = {
  object: Users_User_Insert_Input;
  on_conflict?: InputMaybe<Users_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_User_RolesArgs = {
  objects: Array<Users_User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Users_User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_User_Roles_OneArgs = {
  object: Users_User_Roles_Insert_Input;
  on_conflict?: InputMaybe<Users_User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Body_TypeArgs = {
  _set?: InputMaybe<Cars_Body_Type_Set_Input>;
  where: Cars_Body_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Body_Type_By_PkArgs = {
  _set?: InputMaybe<Cars_Body_Type_Set_Input>;
  pk_columns: Cars_Body_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_CarArgs = {
  _inc?: InputMaybe<Cars_Car_Inc_Input>;
  _set?: InputMaybe<Cars_Car_Set_Input>;
  where: Cars_Car_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_Brand_TypeArgs = {
  _set?: InputMaybe<Cars_Car_Brand_Type_Set_Input>;
  where: Cars_Car_Brand_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_Brand_Type_By_PkArgs = {
  _set?: InputMaybe<Cars_Car_Brand_Type_Set_Input>;
  pk_columns: Cars_Car_Brand_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_By_PkArgs = {
  _inc?: InputMaybe<Cars_Car_Inc_Input>;
  _set?: InputMaybe<Cars_Car_Set_Input>;
  pk_columns: Cars_Car_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_ImagesArgs = {
  _set?: InputMaybe<Cars_Car_Images_Set_Input>;
  where: Cars_Car_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_Images_By_PkArgs = {
  _set?: InputMaybe<Cars_Car_Images_Set_Input>;
  pk_columns: Cars_Car_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_StatusArgs = {
  _set?: InputMaybe<Cars_Car_Status_Set_Input>;
  where: Cars_Car_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Car_Status_By_PkArgs = {
  _set?: InputMaybe<Cars_Car_Status_Set_Input>;
  pk_columns: Cars_Car_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Easy_BoxArgs = {
  _set?: InputMaybe<Cars_Easy_Box_Set_Input>;
  where: Cars_Easy_Box_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Easy_Box_By_PkArgs = {
  _set?: InputMaybe<Cars_Easy_Box_Set_Input>;
  pk_columns: Cars_Easy_Box_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Fuel_TypeArgs = {
  _set?: InputMaybe<Cars_Fuel_Type_Set_Input>;
  where: Cars_Fuel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Fuel_Type_By_PkArgs = {
  _set?: InputMaybe<Cars_Fuel_Type_Set_Input>;
  pk_columns: Cars_Fuel_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_KeyArgs = {
  _set?: InputMaybe<Cars_Key_Set_Input>;
  where: Cars_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Key_By_PkArgs = {
  _set?: InputMaybe<Cars_Key_Set_Input>;
  pk_columns: Cars_Key_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_LocationArgs = {
  _inc?: InputMaybe<Cars_Location_Inc_Input>;
  _set?: InputMaybe<Cars_Location_Set_Input>;
  where: Cars_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Location_By_PkArgs = {
  _inc?: InputMaybe<Cars_Location_Inc_Input>;
  _set?: InputMaybe<Cars_Location_Set_Input>;
  pk_columns: Cars_Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Location_HistoryArgs = {
  _inc?: InputMaybe<Cars_Location_History_Inc_Input>;
  _set?: InputMaybe<Cars_Location_History_Set_Input>;
  where: Cars_Location_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_Location_History_By_PkArgs = {
  _inc?: InputMaybe<Cars_Location_History_Inc_Input>;
  _set?: InputMaybe<Cars_Location_History_Set_Input>;
  pk_columns: Cars_Location_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Car_ReviewArgs = {
  _set?: InputMaybe<Review_Car_Review_Set_Input>;
  where: Review_Car_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Car_Review_By_PkArgs = {
  _set?: InputMaybe<Review_Car_Review_Set_Input>;
  pk_columns: Review_Car_Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_ReviewArgs = {
  _inc?: InputMaybe<Review_Review_Inc_Input>;
  _set?: InputMaybe<Review_Review_Set_Input>;
  where: Review_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Review_By_PkArgs = {
  _inc?: InputMaybe<Review_Review_Inc_Input>;
  _set?: InputMaybe<Review_Review_Set_Input>;
  pk_columns: Review_Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Review_ImagesArgs = {
  _set?: InputMaybe<Review_Review_Images_Set_Input>;
  where: Review_Review_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Review_Images_By_PkArgs = {
  _set?: InputMaybe<Review_Review_Images_Set_Input>;
  pk_columns: Review_Review_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_User_ReviewArgs = {
  _set?: InputMaybe<Review_User_Review_Set_Input>;
  where: Review_User_Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_User_Review_By_PkArgs = {
  _set?: InputMaybe<Review_User_Review_Set_Input>;
  pk_columns: Review_User_Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Rental_ContractArgs = {
  _set?: InputMaybe<Transaction_Rental_Contract_Set_Input>;
  where: Transaction_Rental_Contract_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Rental_Contract_By_PkArgs = {
  _set?: InputMaybe<Transaction_Rental_Contract_Set_Input>;
  pk_columns: Transaction_Rental_Contract_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Rental_StatusArgs = {
  _set?: InputMaybe<Transaction_Rental_Status_Set_Input>;
  where: Transaction_Rental_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Rental_Status_By_PkArgs = {
  _set?: InputMaybe<Transaction_Rental_Status_Set_Input>;
  pk_columns: Transaction_Rental_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Transaction_Set_Input>;
  where: Transaction_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Transaction_Set_Input>;
  pk_columns: Transaction_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_WalletArgs = {
  _inc?: InputMaybe<Transaction_Wallet_Inc_Input>;
  _set?: InputMaybe<Transaction_Wallet_Set_Input>;
  where: Transaction_Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Wallet_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Wallet_Inc_Input>;
  _set?: InputMaybe<Transaction_Wallet_Set_Input>;
  pk_columns: Transaction_Wallet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Prefered_LanguagesArgs = {
  _set?: InputMaybe<Users_Prefered_Languages_Set_Input>;
  where: Users_Prefered_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Prefered_Languages_By_PkArgs = {
  _set?: InputMaybe<Users_Prefered_Languages_Set_Input>;
  pk_columns: Users_Prefered_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Role_NameArgs = {
  _set?: InputMaybe<Users_Role_Name_Set_Input>;
  where: Users_Role_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Role_Name_By_PkArgs = {
  _set?: InputMaybe<Users_Role_Name_Set_Input>;
  pk_columns: Users_Role_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_RolesArgs = {
  _set?: InputMaybe<Users_Roles_Set_Input>;
  where: Users_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Roles_By_PkArgs = {
  _set?: InputMaybe<Users_Roles_Set_Input>;
  pk_columns: Users_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_UserArgs = {
  _set?: InputMaybe<Users_User_Set_Input>;
  where: Users_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_User_By_PkArgs = {
  _set?: InputMaybe<Users_User_Set_Input>;
  pk_columns: Users_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_User_RolesArgs = {
  _set?: InputMaybe<Users_User_Roles_Set_Input>;
  where: Users_User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_User_Roles_By_PkArgs = {
  _set?: InputMaybe<Users_User_Roles_Set_Input>;
  pk_columns: Users_User_Roles_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cars.body_type" */
  cars_body_type: Array<Cars_Body_Type>;
  /** fetch aggregated fields from the table: "cars.body_type" */
  cars_body_type_aggregate: Cars_Body_Type_Aggregate;
  /** fetch data from the table: "cars.body_type" using primary key columns */
  cars_body_type_by_pk?: Maybe<Cars_Body_Type>;
  /** fetch data from the table: "cars.car" */
  cars_car: Array<Cars_Car>;
  /** fetch aggregated fields from the table: "cars.car" */
  cars_car_aggregate: Cars_Car_Aggregate;
  /** fetch data from the table: "cars.car_brand_type" */
  cars_car_brand_type: Array<Cars_Car_Brand_Type>;
  /** fetch aggregated fields from the table: "cars.car_brand_type" */
  cars_car_brand_type_aggregate: Cars_Car_Brand_Type_Aggregate;
  /** fetch data from the table: "cars.car_brand_type" using primary key columns */
  cars_car_brand_type_by_pk?: Maybe<Cars_Car_Brand_Type>;
  /** fetch data from the table: "cars.car" using primary key columns */
  cars_car_by_pk?: Maybe<Cars_Car>;
  /** fetch data from the table: "cars.car_images" */
  cars_car_images: Array<Cars_Car_Images>;
  /** fetch aggregated fields from the table: "cars.car_images" */
  cars_car_images_aggregate: Cars_Car_Images_Aggregate;
  /** fetch data from the table: "cars.car_images" using primary key columns */
  cars_car_images_by_pk?: Maybe<Cars_Car_Images>;
  /** fetch data from the table: "cars.car_status" */
  cars_car_status: Array<Cars_Car_Status>;
  /** fetch aggregated fields from the table: "cars.car_status" */
  cars_car_status_aggregate: Cars_Car_Status_Aggregate;
  /** fetch data from the table: "cars.car_status" using primary key columns */
  cars_car_status_by_pk?: Maybe<Cars_Car_Status>;
  /** fetch data from the table: "cars.easy_box" */
  cars_easy_box: Array<Cars_Easy_Box>;
  /** fetch aggregated fields from the table: "cars.easy_box" */
  cars_easy_box_aggregate: Cars_Easy_Box_Aggregate;
  /** fetch data from the table: "cars.easy_box" using primary key columns */
  cars_easy_box_by_pk?: Maybe<Cars_Easy_Box>;
  /** fetch data from the table: "cars.fuel_type" */
  cars_fuel_type: Array<Cars_Fuel_Type>;
  /** fetch aggregated fields from the table: "cars.fuel_type" */
  cars_fuel_type_aggregate: Cars_Fuel_Type_Aggregate;
  /** fetch data from the table: "cars.fuel_type" using primary key columns */
  cars_fuel_type_by_pk?: Maybe<Cars_Fuel_Type>;
  /** fetch data from the table: "cars.key" */
  cars_key: Array<Cars_Key>;
  /** fetch aggregated fields from the table: "cars.key" */
  cars_key_aggregate: Cars_Key_Aggregate;
  /** fetch data from the table: "cars.key" using primary key columns */
  cars_key_by_pk?: Maybe<Cars_Key>;
  /** fetch data from the table: "cars.location" */
  cars_location: Array<Cars_Location>;
  /** fetch aggregated fields from the table: "cars.location" */
  cars_location_aggregate: Cars_Location_Aggregate;
  /** fetch data from the table: "cars.location" using primary key columns */
  cars_location_by_pk?: Maybe<Cars_Location>;
  /** fetch data from the table: "cars.location_history" */
  cars_location_history: Array<Cars_Location_History>;
  /** fetch aggregated fields from the table: "cars.location_history" */
  cars_location_history_aggregate: Cars_Location_History_Aggregate;
  /** fetch data from the table: "cars.location_history" using primary key columns */
  cars_location_history_by_pk?: Maybe<Cars_Location_History>;
  /** fetch data from the table: "review.car_review" */
  review_car_review: Array<Review_Car_Review>;
  /** fetch aggregated fields from the table: "review.car_review" */
  review_car_review_aggregate: Review_Car_Review_Aggregate;
  /** fetch data from the table: "review.car_review" using primary key columns */
  review_car_review_by_pk?: Maybe<Review_Car_Review>;
  /** fetch data from the table: "review.review" */
  review_review: Array<Review_Review>;
  /** fetch aggregated fields from the table: "review.review" */
  review_review_aggregate: Review_Review_Aggregate;
  /** fetch data from the table: "review.review" using primary key columns */
  review_review_by_pk?: Maybe<Review_Review>;
  /** fetch data from the table: "review.review_images" */
  review_review_images: Array<Review_Review_Images>;
  /** fetch aggregated fields from the table: "review.review_images" */
  review_review_images_aggregate: Review_Review_Images_Aggregate;
  /** fetch data from the table: "review.review_images" using primary key columns */
  review_review_images_by_pk?: Maybe<Review_Review_Images>;
  /** fetch data from the table: "review.user_review" */
  review_user_review: Array<Review_User_Review>;
  /** fetch aggregated fields from the table: "review.user_review" */
  review_user_review_aggregate: Review_User_Review_Aggregate;
  /** fetch data from the table: "review.user_review" using primary key columns */
  review_user_review_by_pk?: Maybe<Review_User_Review>;
  /** fetch data from the table: "transaction.rental_contract" */
  transaction_rental_contract: Array<Transaction_Rental_Contract>;
  /** fetch aggregated fields from the table: "transaction.rental_contract" */
  transaction_rental_contract_aggregate: Transaction_Rental_Contract_Aggregate;
  /** fetch data from the table: "transaction.rental_contract" using primary key columns */
  transaction_rental_contract_by_pk?: Maybe<Transaction_Rental_Contract>;
  /** fetch data from the table: "transaction.rental_status" */
  transaction_rental_status: Array<Transaction_Rental_Status>;
  /** fetch aggregated fields from the table: "transaction.rental_status" */
  transaction_rental_status_aggregate: Transaction_Rental_Status_Aggregate;
  /** fetch data from the table: "transaction.rental_status" using primary key columns */
  transaction_rental_status_by_pk?: Maybe<Transaction_Rental_Status>;
  /** fetch data from the table: "transaction.transaction" */
  transaction_transaction: Array<Transaction_Transaction>;
  /** fetch aggregated fields from the table: "transaction.transaction" */
  transaction_transaction_aggregate: Transaction_Transaction_Aggregate;
  /** fetch data from the table: "transaction.transaction" using primary key columns */
  transaction_transaction_by_pk?: Maybe<Transaction_Transaction>;
  /** fetch data from the table: "transaction.wallet" */
  transaction_wallet: Array<Transaction_Wallet>;
  /** fetch aggregated fields from the table: "transaction.wallet" */
  transaction_wallet_aggregate: Transaction_Wallet_Aggregate;
  /** fetch data from the table: "transaction.wallet" using primary key columns */
  transaction_wallet_by_pk?: Maybe<Transaction_Wallet>;
  /** fetch data from the table: "users.prefered_languages" */
  users_prefered_languages: Array<Users_Prefered_Languages>;
  /** fetch aggregated fields from the table: "users.prefered_languages" */
  users_prefered_languages_aggregate: Users_Prefered_Languages_Aggregate;
  /** fetch data from the table: "users.prefered_languages" using primary key columns */
  users_prefered_languages_by_pk?: Maybe<Users_Prefered_Languages>;
  /** fetch data from the table: "users.role_name" */
  users_role_name: Array<Users_Role_Name>;
  /** fetch aggregated fields from the table: "users.role_name" */
  users_role_name_aggregate: Users_Role_Name_Aggregate;
  /** fetch data from the table: "users.role_name" using primary key columns */
  users_role_name_by_pk?: Maybe<Users_Role_Name>;
  /** fetch data from the table: "users.roles" */
  users_roles: Array<Users_Roles>;
  /** fetch aggregated fields from the table: "users.roles" */
  users_roles_aggregate: Users_Roles_Aggregate;
  /** fetch data from the table: "users.roles" using primary key columns */
  users_roles_by_pk?: Maybe<Users_Roles>;
  /** fetch data from the table: "users.user" */
  users_user: Array<Users_User>;
  /** fetch aggregated fields from the table: "users.user" */
  users_user_aggregate: Users_User_Aggregate;
  /** fetch data from the table: "users.user" using primary key columns */
  users_user_by_pk?: Maybe<Users_User>;
  /** fetch data from the table: "users.user_roles" */
  users_user_roles: Array<Users_User_Roles>;
  /** fetch aggregated fields from the table: "users.user_roles" */
  users_user_roles_aggregate: Users_User_Roles_Aggregate;
  /** fetch data from the table: "users.user_roles" using primary key columns */
  users_user_roles_by_pk?: Maybe<Users_User_Roles>;
};


export type Query_RootCars_Body_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Body_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Body_Type_Order_By>>;
  where?: InputMaybe<Cars_Body_Type_Bool_Exp>;
};


export type Query_RootCars_Body_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Body_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Body_Type_Order_By>>;
  where?: InputMaybe<Cars_Body_Type_Bool_Exp>;
};


export type Query_RootCars_Body_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCars_CarArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Order_By>>;
  where?: InputMaybe<Cars_Car_Bool_Exp>;
};


export type Query_RootCars_Car_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Order_By>>;
  where?: InputMaybe<Cars_Car_Bool_Exp>;
};


export type Query_RootCars_Car_Brand_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Brand_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Brand_Type_Order_By>>;
  where?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
};


export type Query_RootCars_Car_Brand_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Brand_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Brand_Type_Order_By>>;
  where?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
};


export type Query_RootCars_Car_Brand_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCars_Car_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCars_Car_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Images_Order_By>>;
  where?: InputMaybe<Cars_Car_Images_Bool_Exp>;
};


export type Query_RootCars_Car_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Images_Order_By>>;
  where?: InputMaybe<Cars_Car_Images_Bool_Exp>;
};


export type Query_RootCars_Car_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCars_Car_StatusArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Status_Order_By>>;
  where?: InputMaybe<Cars_Car_Status_Bool_Exp>;
};


export type Query_RootCars_Car_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Status_Order_By>>;
  where?: InputMaybe<Cars_Car_Status_Bool_Exp>;
};


export type Query_RootCars_Car_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCars_Easy_BoxArgs = {
  distinct_on?: InputMaybe<Array<Cars_Easy_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Easy_Box_Order_By>>;
  where?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
};


export type Query_RootCars_Easy_Box_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Easy_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Easy_Box_Order_By>>;
  where?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
};


export type Query_RootCars_Easy_Box_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCars_Fuel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Fuel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Fuel_Type_Order_By>>;
  where?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
};


export type Query_RootCars_Fuel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Fuel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Fuel_Type_Order_By>>;
  where?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
};


export type Query_RootCars_Fuel_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCars_KeyArgs = {
  distinct_on?: InputMaybe<Array<Cars_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Key_Order_By>>;
  where?: InputMaybe<Cars_Key_Bool_Exp>;
};


export type Query_RootCars_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Key_Order_By>>;
  where?: InputMaybe<Cars_Key_Bool_Exp>;
};


export type Query_RootCars_Key_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCars_LocationArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_Order_By>>;
  where?: InputMaybe<Cars_Location_Bool_Exp>;
};


export type Query_RootCars_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_Order_By>>;
  where?: InputMaybe<Cars_Location_Bool_Exp>;
};


export type Query_RootCars_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCars_Location_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_History_Order_By>>;
  where?: InputMaybe<Cars_Location_History_Bool_Exp>;
};


export type Query_RootCars_Location_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_History_Order_By>>;
  where?: InputMaybe<Cars_Location_History_Bool_Exp>;
};


export type Query_RootCars_Location_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReview_Car_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Car_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Car_Review_Order_By>>;
  where?: InputMaybe<Review_Car_Review_Bool_Exp>;
};


export type Query_RootReview_Car_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Car_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Car_Review_Order_By>>;
  where?: InputMaybe<Review_Car_Review_Bool_Exp>;
};


export type Query_RootReview_Car_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReview_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Order_By>>;
  where?: InputMaybe<Review_Review_Bool_Exp>;
};


export type Query_RootReview_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Order_By>>;
  where?: InputMaybe<Review_Review_Bool_Exp>;
};


export type Query_RootReview_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReview_Review_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Images_Order_By>>;
  where?: InputMaybe<Review_Review_Images_Bool_Exp>;
};


export type Query_RootReview_Review_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Images_Order_By>>;
  where?: InputMaybe<Review_Review_Images_Bool_Exp>;
};


export type Query_RootReview_Review_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReview_User_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_User_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_User_Review_Order_By>>;
  where?: InputMaybe<Review_User_Review_Bool_Exp>;
};


export type Query_RootReview_User_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_User_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_User_Review_Order_By>>;
  where?: InputMaybe<Review_User_Review_Bool_Exp>;
};


export type Query_RootReview_User_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransaction_Rental_ContractArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Contract_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
};


export type Query_RootTransaction_Rental_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Contract_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
};


export type Query_RootTransaction_Rental_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransaction_Rental_StatusArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Status_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
};


export type Query_RootTransaction_Rental_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Status_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
};


export type Query_RootTransaction_Rental_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTransaction_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Transaction_Bool_Exp>;
};


export type Query_RootTransaction_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Transaction_Bool_Exp>;
};


export type Query_RootTransaction_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransaction_WalletArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Wallet_Order_By>>;
  where?: InputMaybe<Transaction_Wallet_Bool_Exp>;
};


export type Query_RootTransaction_Wallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Wallet_Order_By>>;
  where?: InputMaybe<Transaction_Wallet_Bool_Exp>;
};


export type Query_RootTransaction_Wallet_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsers_Prefered_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Users_Prefered_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Prefered_Languages_Order_By>>;
  where?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
};


export type Query_RootUsers_Prefered_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Prefered_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Prefered_Languages_Order_By>>;
  where?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
};


export type Query_RootUsers_Prefered_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUsers_Role_NameArgs = {
  distinct_on?: InputMaybe<Array<Users_Role_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Role_Name_Order_By>>;
  where?: InputMaybe<Users_Role_Name_Bool_Exp>;
};


export type Query_RootUsers_Role_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Role_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Role_Name_Order_By>>;
  where?: InputMaybe<Users_Role_Name_Bool_Exp>;
};


export type Query_RootUsers_Role_Name_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUsers_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Query_RootUsers_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Query_RootUsers_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsers_UserArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Order_By>>;
  where?: InputMaybe<Users_User_Bool_Exp>;
};


export type Query_RootUsers_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Order_By>>;
  where?: InputMaybe<Users_User_Bool_Exp>;
};


export type Query_RootUsers_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsers_User_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Roles_Order_By>>;
  where?: InputMaybe<Users_User_Roles_Bool_Exp>;
};


export type Query_RootUsers_User_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Roles_Order_By>>;
  where?: InputMaybe<Users_User_Roles_Bool_Exp>;
};


export type Query_RootUsers_User_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "review.car_review" */
export type Review_Car_Review = {
  __typename?: 'review_car_review';
  car_id: Scalars['uuid'];
  id: Scalars['uuid'];
  review_id: Scalars['uuid'];
  reviewer_id: Scalars['uuid'];
};

/** aggregated selection of "review.car_review" */
export type Review_Car_Review_Aggregate = {
  __typename?: 'review_car_review_aggregate';
  aggregate?: Maybe<Review_Car_Review_Aggregate_Fields>;
  nodes: Array<Review_Car_Review>;
};

/** aggregate fields of "review.car_review" */
export type Review_Car_Review_Aggregate_Fields = {
  __typename?: 'review_car_review_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Review_Car_Review_Max_Fields>;
  min?: Maybe<Review_Car_Review_Min_Fields>;
};


/** aggregate fields of "review.car_review" */
export type Review_Car_Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Car_Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "review.car_review". All fields are combined with a logical 'AND'. */
export type Review_Car_Review_Bool_Exp = {
  _and?: InputMaybe<Array<Review_Car_Review_Bool_Exp>>;
  _not?: InputMaybe<Review_Car_Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Car_Review_Bool_Exp>>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  review_id?: InputMaybe<Uuid_Comparison_Exp>;
  reviewer_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "review.car_review" */
export enum Review_Car_Review_Constraint {
  /** unique or primary key constraint */
  CarReviewPkey = 'car_review_pkey'
}

/** input type for inserting data into table "review.car_review" */
export type Review_Car_Review_Insert_Input = {
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  review_id?: InputMaybe<Scalars['uuid']>;
  reviewer_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Review_Car_Review_Max_Fields = {
  __typename?: 'review_car_review_max_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  review_id?: Maybe<Scalars['uuid']>;
  reviewer_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Review_Car_Review_Min_Fields = {
  __typename?: 'review_car_review_min_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  review_id?: Maybe<Scalars['uuid']>;
  reviewer_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "review.car_review" */
export type Review_Car_Review_Mutation_Response = {
  __typename?: 'review_car_review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review_Car_Review>;
};

/** on conflict condition type for table "review.car_review" */
export type Review_Car_Review_On_Conflict = {
  constraint: Review_Car_Review_Constraint;
  update_columns?: Array<Review_Car_Review_Update_Column>;
  where?: InputMaybe<Review_Car_Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review.car_review". */
export type Review_Car_Review_Order_By = {
  car_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
  reviewer_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: review_car_review */
export type Review_Car_Review_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review.car_review" */
export enum Review_Car_Review_Select_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  ReviewerId = 'reviewer_id'
}

/** input type for updating data in table "review.car_review" */
export type Review_Car_Review_Set_Input = {
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  review_id?: InputMaybe<Scalars['uuid']>;
  reviewer_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "review.car_review" */
export enum Review_Car_Review_Update_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  ReviewerId = 'reviewer_id'
}

/** columns and relationships of "review.review" */
export type Review_Review = {
  __typename?: 'review_review';
  date: Scalars['date'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  score: Scalars['numeric'];
  title: Scalars['String'];
};

/** aggregated selection of "review.review" */
export type Review_Review_Aggregate = {
  __typename?: 'review_review_aggregate';
  aggregate?: Maybe<Review_Review_Aggregate_Fields>;
  nodes: Array<Review_Review>;
};

/** aggregate fields of "review.review" */
export type Review_Review_Aggregate_Fields = {
  __typename?: 'review_review_aggregate_fields';
  avg?: Maybe<Review_Review_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Review_Review_Max_Fields>;
  min?: Maybe<Review_Review_Min_Fields>;
  stddev?: Maybe<Review_Review_Stddev_Fields>;
  stddev_pop?: Maybe<Review_Review_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Review_Review_Stddev_Samp_Fields>;
  sum?: Maybe<Review_Review_Sum_Fields>;
  var_pop?: Maybe<Review_Review_Var_Pop_Fields>;
  var_samp?: Maybe<Review_Review_Var_Samp_Fields>;
  variance?: Maybe<Review_Review_Variance_Fields>;
};


/** aggregate fields of "review.review" */
export type Review_Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Review_Review_Avg_Fields = {
  __typename?: 'review_review_avg_fields';
  score?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "review.review". All fields are combined with a logical 'AND'. */
export type Review_Review_Bool_Exp = {
  _and?: InputMaybe<Array<Review_Review_Bool_Exp>>;
  _not?: InputMaybe<Review_Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Review_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  score?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "review.review" */
export enum Review_Review_Constraint {
  /** unique or primary key constraint */
  ReviewPkey = 'review_pkey'
}

/** columns and relationships of "review.review_images" */
export type Review_Review_Images = {
  __typename?: 'review_review_images';
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  review_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "review.review_images" */
export type Review_Review_Images_Aggregate = {
  __typename?: 'review_review_images_aggregate';
  aggregate?: Maybe<Review_Review_Images_Aggregate_Fields>;
  nodes: Array<Review_Review_Images>;
};

/** aggregate fields of "review.review_images" */
export type Review_Review_Images_Aggregate_Fields = {
  __typename?: 'review_review_images_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Review_Review_Images_Max_Fields>;
  min?: Maybe<Review_Review_Images_Min_Fields>;
};


/** aggregate fields of "review.review_images" */
export type Review_Review_Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Review_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "review.review_images". All fields are combined with a logical 'AND'. */
export type Review_Review_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Review_Review_Images_Bool_Exp>>;
  _not?: InputMaybe<Review_Review_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Review_Images_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  review_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "review.review_images" */
export enum Review_Review_Images_Constraint {
  /** unique or primary key constraint */
  ReviewImagesPkey = 'review_images_pkey'
}

/** input type for inserting data into table "review.review_images" */
export type Review_Review_Images_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  review_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Review_Review_Images_Max_Fields = {
  __typename?: 'review_review_images_max_fields';
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Review_Review_Images_Min_Fields = {
  __typename?: 'review_review_images_min_fields';
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "review.review_images" */
export type Review_Review_Images_Mutation_Response = {
  __typename?: 'review_review_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review_Review_Images>;
};

/** on conflict condition type for table "review.review_images" */
export type Review_Review_Images_On_Conflict = {
  constraint: Review_Review_Images_Constraint;
  update_columns?: Array<Review_Review_Images_Update_Column>;
  where?: InputMaybe<Review_Review_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "review.review_images". */
export type Review_Review_Images_Order_By = {
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: review_review_images */
export type Review_Review_Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review.review_images" */
export enum Review_Review_Images_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  ReviewId = 'review_id'
}

/** input type for updating data in table "review.review_images" */
export type Review_Review_Images_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  review_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "review.review_images" */
export enum Review_Review_Images_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  ReviewId = 'review_id'
}

/** input type for incrementing numeric columns in table "review.review" */
export type Review_Review_Inc_Input = {
  score?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "review.review" */
export type Review_Review_Insert_Input = {
  date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  score?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Review_Review_Max_Fields = {
  __typename?: 'review_review_max_fields';
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Review_Review_Min_Fields = {
  __typename?: 'review_review_min_fields';
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "review.review" */
export type Review_Review_Mutation_Response = {
  __typename?: 'review_review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review_Review>;
};

/** on conflict condition type for table "review.review" */
export type Review_Review_On_Conflict = {
  constraint: Review_Review_Constraint;
  update_columns?: Array<Review_Review_Update_Column>;
  where?: InputMaybe<Review_Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review.review". */
export type Review_Review_Order_By = {
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: review_review */
export type Review_Review_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review.review" */
export enum Review_Review_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Score = 'score',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "review.review" */
export type Review_Review_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  score?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Review_Review_Stddev_Fields = {
  __typename?: 'review_review_stddev_fields';
  score?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Review_Review_Stddev_Pop_Fields = {
  __typename?: 'review_review_stddev_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Review_Review_Stddev_Samp_Fields = {
  __typename?: 'review_review_stddev_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Review_Review_Sum_Fields = {
  __typename?: 'review_review_sum_fields';
  score?: Maybe<Scalars['numeric']>;
};

/** update columns of table "review.review" */
export enum Review_Review_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Score = 'score',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Review_Review_Var_Pop_Fields = {
  __typename?: 'review_review_var_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Review_Review_Var_Samp_Fields = {
  __typename?: 'review_review_var_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Review_Review_Variance_Fields = {
  __typename?: 'review_review_variance_fields';
  score?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "review.user_review" */
export type Review_User_Review = {
  __typename?: 'review_user_review';
  by?: Maybe<Scalars['uuid']>;
  for?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  review_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "review.user_review" */
export type Review_User_Review_Aggregate = {
  __typename?: 'review_user_review_aggregate';
  aggregate?: Maybe<Review_User_Review_Aggregate_Fields>;
  nodes: Array<Review_User_Review>;
};

/** aggregate fields of "review.user_review" */
export type Review_User_Review_Aggregate_Fields = {
  __typename?: 'review_user_review_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Review_User_Review_Max_Fields>;
  min?: Maybe<Review_User_Review_Min_Fields>;
};


/** aggregate fields of "review.user_review" */
export type Review_User_Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_User_Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "review.user_review". All fields are combined with a logical 'AND'. */
export type Review_User_Review_Bool_Exp = {
  _and?: InputMaybe<Array<Review_User_Review_Bool_Exp>>;
  _not?: InputMaybe<Review_User_Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_User_Review_Bool_Exp>>;
  by?: InputMaybe<Uuid_Comparison_Exp>;
  for?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  review_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "review.user_review" */
export enum Review_User_Review_Constraint {
  /** unique or primary key constraint */
  UserReviewPkey = 'user_review_pkey'
}

/** input type for inserting data into table "review.user_review" */
export type Review_User_Review_Insert_Input = {
  by?: InputMaybe<Scalars['uuid']>;
  for?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  review_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Review_User_Review_Max_Fields = {
  __typename?: 'review_user_review_max_fields';
  by?: Maybe<Scalars['uuid']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  review_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Review_User_Review_Min_Fields = {
  __typename?: 'review_user_review_min_fields';
  by?: Maybe<Scalars['uuid']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  review_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "review.user_review" */
export type Review_User_Review_Mutation_Response = {
  __typename?: 'review_user_review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review_User_Review>;
};

/** on conflict condition type for table "review.user_review" */
export type Review_User_Review_On_Conflict = {
  constraint: Review_User_Review_Constraint;
  update_columns?: Array<Review_User_Review_Update_Column>;
  where?: InputMaybe<Review_User_Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review.user_review". */
export type Review_User_Review_Order_By = {
  by?: InputMaybe<Order_By>;
  for?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: review_user_review */
export type Review_User_Review_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review.user_review" */
export enum Review_User_Review_Select_Column {
  /** column name */
  By = 'by',
  /** column name */
  For = 'for',
  /** column name */
  Id = 'id',
  /** column name */
  ReviewId = 'review_id'
}

/** input type for updating data in table "review.user_review" */
export type Review_User_Review_Set_Input = {
  by?: InputMaybe<Scalars['uuid']>;
  for?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  review_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "review.user_review" */
export enum Review_User_Review_Update_Column {
  /** column name */
  By = 'by',
  /** column name */
  For = 'for',
  /** column name */
  Id = 'id',
  /** column name */
  ReviewId = 'review_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cars.body_type" */
  cars_body_type: Array<Cars_Body_Type>;
  /** fetch aggregated fields from the table: "cars.body_type" */
  cars_body_type_aggregate: Cars_Body_Type_Aggregate;
  /** fetch data from the table: "cars.body_type" using primary key columns */
  cars_body_type_by_pk?: Maybe<Cars_Body_Type>;
  /** fetch data from the table: "cars.car" */
  cars_car: Array<Cars_Car>;
  /** fetch aggregated fields from the table: "cars.car" */
  cars_car_aggregate: Cars_Car_Aggregate;
  /** fetch data from the table: "cars.car_brand_type" */
  cars_car_brand_type: Array<Cars_Car_Brand_Type>;
  /** fetch aggregated fields from the table: "cars.car_brand_type" */
  cars_car_brand_type_aggregate: Cars_Car_Brand_Type_Aggregate;
  /** fetch data from the table: "cars.car_brand_type" using primary key columns */
  cars_car_brand_type_by_pk?: Maybe<Cars_Car_Brand_Type>;
  /** fetch data from the table: "cars.car" using primary key columns */
  cars_car_by_pk?: Maybe<Cars_Car>;
  /** fetch data from the table: "cars.car_images" */
  cars_car_images: Array<Cars_Car_Images>;
  /** fetch aggregated fields from the table: "cars.car_images" */
  cars_car_images_aggregate: Cars_Car_Images_Aggregate;
  /** fetch data from the table: "cars.car_images" using primary key columns */
  cars_car_images_by_pk?: Maybe<Cars_Car_Images>;
  /** fetch data from the table: "cars.car_status" */
  cars_car_status: Array<Cars_Car_Status>;
  /** fetch aggregated fields from the table: "cars.car_status" */
  cars_car_status_aggregate: Cars_Car_Status_Aggregate;
  /** fetch data from the table: "cars.car_status" using primary key columns */
  cars_car_status_by_pk?: Maybe<Cars_Car_Status>;
  /** fetch data from the table: "cars.easy_box" */
  cars_easy_box: Array<Cars_Easy_Box>;
  /** fetch aggregated fields from the table: "cars.easy_box" */
  cars_easy_box_aggregate: Cars_Easy_Box_Aggregate;
  /** fetch data from the table: "cars.easy_box" using primary key columns */
  cars_easy_box_by_pk?: Maybe<Cars_Easy_Box>;
  /** fetch data from the table: "cars.fuel_type" */
  cars_fuel_type: Array<Cars_Fuel_Type>;
  /** fetch aggregated fields from the table: "cars.fuel_type" */
  cars_fuel_type_aggregate: Cars_Fuel_Type_Aggregate;
  /** fetch data from the table: "cars.fuel_type" using primary key columns */
  cars_fuel_type_by_pk?: Maybe<Cars_Fuel_Type>;
  /** fetch data from the table: "cars.key" */
  cars_key: Array<Cars_Key>;
  /** fetch aggregated fields from the table: "cars.key" */
  cars_key_aggregate: Cars_Key_Aggregate;
  /** fetch data from the table: "cars.key" using primary key columns */
  cars_key_by_pk?: Maybe<Cars_Key>;
  /** fetch data from the table: "cars.location" */
  cars_location: Array<Cars_Location>;
  /** fetch aggregated fields from the table: "cars.location" */
  cars_location_aggregate: Cars_Location_Aggregate;
  /** fetch data from the table: "cars.location" using primary key columns */
  cars_location_by_pk?: Maybe<Cars_Location>;
  /** fetch data from the table: "cars.location_history" */
  cars_location_history: Array<Cars_Location_History>;
  /** fetch aggregated fields from the table: "cars.location_history" */
  cars_location_history_aggregate: Cars_Location_History_Aggregate;
  /** fetch data from the table: "cars.location_history" using primary key columns */
  cars_location_history_by_pk?: Maybe<Cars_Location_History>;
  /** fetch data from the table: "review.car_review" */
  review_car_review: Array<Review_Car_Review>;
  /** fetch aggregated fields from the table: "review.car_review" */
  review_car_review_aggregate: Review_Car_Review_Aggregate;
  /** fetch data from the table: "review.car_review" using primary key columns */
  review_car_review_by_pk?: Maybe<Review_Car_Review>;
  /** fetch data from the table: "review.review" */
  review_review: Array<Review_Review>;
  /** fetch aggregated fields from the table: "review.review" */
  review_review_aggregate: Review_Review_Aggregate;
  /** fetch data from the table: "review.review" using primary key columns */
  review_review_by_pk?: Maybe<Review_Review>;
  /** fetch data from the table: "review.review_images" */
  review_review_images: Array<Review_Review_Images>;
  /** fetch aggregated fields from the table: "review.review_images" */
  review_review_images_aggregate: Review_Review_Images_Aggregate;
  /** fetch data from the table: "review.review_images" using primary key columns */
  review_review_images_by_pk?: Maybe<Review_Review_Images>;
  /** fetch data from the table: "review.user_review" */
  review_user_review: Array<Review_User_Review>;
  /** fetch aggregated fields from the table: "review.user_review" */
  review_user_review_aggregate: Review_User_Review_Aggregate;
  /** fetch data from the table: "review.user_review" using primary key columns */
  review_user_review_by_pk?: Maybe<Review_User_Review>;
  /** fetch data from the table: "transaction.rental_contract" */
  transaction_rental_contract: Array<Transaction_Rental_Contract>;
  /** fetch aggregated fields from the table: "transaction.rental_contract" */
  transaction_rental_contract_aggregate: Transaction_Rental_Contract_Aggregate;
  /** fetch data from the table: "transaction.rental_contract" using primary key columns */
  transaction_rental_contract_by_pk?: Maybe<Transaction_Rental_Contract>;
  /** fetch data from the table: "transaction.rental_status" */
  transaction_rental_status: Array<Transaction_Rental_Status>;
  /** fetch aggregated fields from the table: "transaction.rental_status" */
  transaction_rental_status_aggregate: Transaction_Rental_Status_Aggregate;
  /** fetch data from the table: "transaction.rental_status" using primary key columns */
  transaction_rental_status_by_pk?: Maybe<Transaction_Rental_Status>;
  /** fetch data from the table: "transaction.transaction" */
  transaction_transaction: Array<Transaction_Transaction>;
  /** fetch aggregated fields from the table: "transaction.transaction" */
  transaction_transaction_aggregate: Transaction_Transaction_Aggregate;
  /** fetch data from the table: "transaction.transaction" using primary key columns */
  transaction_transaction_by_pk?: Maybe<Transaction_Transaction>;
  /** fetch data from the table: "transaction.wallet" */
  transaction_wallet: Array<Transaction_Wallet>;
  /** fetch aggregated fields from the table: "transaction.wallet" */
  transaction_wallet_aggregate: Transaction_Wallet_Aggregate;
  /** fetch data from the table: "transaction.wallet" using primary key columns */
  transaction_wallet_by_pk?: Maybe<Transaction_Wallet>;
  /** fetch data from the table: "users.prefered_languages" */
  users_prefered_languages: Array<Users_Prefered_Languages>;
  /** fetch aggregated fields from the table: "users.prefered_languages" */
  users_prefered_languages_aggregate: Users_Prefered_Languages_Aggregate;
  /** fetch data from the table: "users.prefered_languages" using primary key columns */
  users_prefered_languages_by_pk?: Maybe<Users_Prefered_Languages>;
  /** fetch data from the table: "users.role_name" */
  users_role_name: Array<Users_Role_Name>;
  /** fetch aggregated fields from the table: "users.role_name" */
  users_role_name_aggregate: Users_Role_Name_Aggregate;
  /** fetch data from the table: "users.role_name" using primary key columns */
  users_role_name_by_pk?: Maybe<Users_Role_Name>;
  /** fetch data from the table: "users.roles" */
  users_roles: Array<Users_Roles>;
  /** fetch aggregated fields from the table: "users.roles" */
  users_roles_aggregate: Users_Roles_Aggregate;
  /** fetch data from the table: "users.roles" using primary key columns */
  users_roles_by_pk?: Maybe<Users_Roles>;
  /** fetch data from the table: "users.user" */
  users_user: Array<Users_User>;
  /** fetch aggregated fields from the table: "users.user" */
  users_user_aggregate: Users_User_Aggregate;
  /** fetch data from the table: "users.user" using primary key columns */
  users_user_by_pk?: Maybe<Users_User>;
  /** fetch data from the table: "users.user_roles" */
  users_user_roles: Array<Users_User_Roles>;
  /** fetch aggregated fields from the table: "users.user_roles" */
  users_user_roles_aggregate: Users_User_Roles_Aggregate;
  /** fetch data from the table: "users.user_roles" using primary key columns */
  users_user_roles_by_pk?: Maybe<Users_User_Roles>;
};


export type Subscription_RootCars_Body_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Body_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Body_Type_Order_By>>;
  where?: InputMaybe<Cars_Body_Type_Bool_Exp>;
};


export type Subscription_RootCars_Body_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Body_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Body_Type_Order_By>>;
  where?: InputMaybe<Cars_Body_Type_Bool_Exp>;
};


export type Subscription_RootCars_Body_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCars_CarArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Order_By>>;
  where?: InputMaybe<Cars_Car_Bool_Exp>;
};


export type Subscription_RootCars_Car_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Order_By>>;
  where?: InputMaybe<Cars_Car_Bool_Exp>;
};


export type Subscription_RootCars_Car_Brand_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Brand_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Brand_Type_Order_By>>;
  where?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
};


export type Subscription_RootCars_Car_Brand_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Brand_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Brand_Type_Order_By>>;
  where?: InputMaybe<Cars_Car_Brand_Type_Bool_Exp>;
};


export type Subscription_RootCars_Car_Brand_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCars_Car_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCars_Car_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Images_Order_By>>;
  where?: InputMaybe<Cars_Car_Images_Bool_Exp>;
};


export type Subscription_RootCars_Car_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Images_Order_By>>;
  where?: InputMaybe<Cars_Car_Images_Bool_Exp>;
};


export type Subscription_RootCars_Car_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCars_Car_StatusArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Status_Order_By>>;
  where?: InputMaybe<Cars_Car_Status_Bool_Exp>;
};


export type Subscription_RootCars_Car_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Car_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Car_Status_Order_By>>;
  where?: InputMaybe<Cars_Car_Status_Bool_Exp>;
};


export type Subscription_RootCars_Car_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCars_Easy_BoxArgs = {
  distinct_on?: InputMaybe<Array<Cars_Easy_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Easy_Box_Order_By>>;
  where?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
};


export type Subscription_RootCars_Easy_Box_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Easy_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Easy_Box_Order_By>>;
  where?: InputMaybe<Cars_Easy_Box_Bool_Exp>;
};


export type Subscription_RootCars_Easy_Box_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCars_Fuel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Cars_Fuel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Fuel_Type_Order_By>>;
  where?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
};


export type Subscription_RootCars_Fuel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Fuel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Fuel_Type_Order_By>>;
  where?: InputMaybe<Cars_Fuel_Type_Bool_Exp>;
};


export type Subscription_RootCars_Fuel_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCars_KeyArgs = {
  distinct_on?: InputMaybe<Array<Cars_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Key_Order_By>>;
  where?: InputMaybe<Cars_Key_Bool_Exp>;
};


export type Subscription_RootCars_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Key_Order_By>>;
  where?: InputMaybe<Cars_Key_Bool_Exp>;
};


export type Subscription_RootCars_Key_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCars_LocationArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_Order_By>>;
  where?: InputMaybe<Cars_Location_Bool_Exp>;
};


export type Subscription_RootCars_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_Order_By>>;
  where?: InputMaybe<Cars_Location_Bool_Exp>;
};


export type Subscription_RootCars_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCars_Location_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_History_Order_By>>;
  where?: InputMaybe<Cars_Location_History_Bool_Exp>;
};


export type Subscription_RootCars_Location_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Location_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Location_History_Order_By>>;
  where?: InputMaybe<Cars_Location_History_Bool_Exp>;
};


export type Subscription_RootCars_Location_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReview_Car_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Car_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Car_Review_Order_By>>;
  where?: InputMaybe<Review_Car_Review_Bool_Exp>;
};


export type Subscription_RootReview_Car_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Car_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Car_Review_Order_By>>;
  where?: InputMaybe<Review_Car_Review_Bool_Exp>;
};


export type Subscription_RootReview_Car_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReview_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Order_By>>;
  where?: InputMaybe<Review_Review_Bool_Exp>;
};


export type Subscription_RootReview_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Order_By>>;
  where?: InputMaybe<Review_Review_Bool_Exp>;
};


export type Subscription_RootReview_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReview_Review_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Images_Order_By>>;
  where?: InputMaybe<Review_Review_Images_Bool_Exp>;
};


export type Subscription_RootReview_Review_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Review_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Review_Images_Order_By>>;
  where?: InputMaybe<Review_Review_Images_Bool_Exp>;
};


export type Subscription_RootReview_Review_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReview_User_ReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_User_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_User_Review_Order_By>>;
  where?: InputMaybe<Review_User_Review_Bool_Exp>;
};


export type Subscription_RootReview_User_Review_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_User_Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_User_Review_Order_By>>;
  where?: InputMaybe<Review_User_Review_Bool_Exp>;
};


export type Subscription_RootReview_User_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransaction_Rental_ContractArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Contract_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
};


export type Subscription_RootTransaction_Rental_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Contract_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
};


export type Subscription_RootTransaction_Rental_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransaction_Rental_StatusArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Status_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
};


export type Subscription_RootTransaction_Rental_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Rental_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Rental_Status_Order_By>>;
  where?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
};


export type Subscription_RootTransaction_Rental_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTransaction_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransaction_WalletArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Wallet_Order_By>>;
  where?: InputMaybe<Transaction_Wallet_Bool_Exp>;
};


export type Subscription_RootTransaction_Wallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Wallet_Order_By>>;
  where?: InputMaybe<Transaction_Wallet_Bool_Exp>;
};


export type Subscription_RootTransaction_Wallet_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_Prefered_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Users_Prefered_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Prefered_Languages_Order_By>>;
  where?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
};


export type Subscription_RootUsers_Prefered_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Prefered_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Prefered_Languages_Order_By>>;
  where?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
};


export type Subscription_RootUsers_Prefered_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUsers_Role_NameArgs = {
  distinct_on?: InputMaybe<Array<Users_Role_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Role_Name_Order_By>>;
  where?: InputMaybe<Users_Role_Name_Bool_Exp>;
};


export type Subscription_RootUsers_Role_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Role_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Role_Name_Order_By>>;
  where?: InputMaybe<Users_Role_Name_Bool_Exp>;
};


export type Subscription_RootUsers_Role_Name_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUsers_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_UserArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Order_By>>;
  where?: InputMaybe<Users_User_Bool_Exp>;
};


export type Subscription_RootUsers_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Order_By>>;
  where?: InputMaybe<Users_User_Bool_Exp>;
};


export type Subscription_RootUsers_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_User_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Roles_Order_By>>;
  where?: InputMaybe<Users_User_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_User_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_User_Roles_Order_By>>;
  where?: InputMaybe<Users_User_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_User_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "transaction.rental_contract" */
export type Transaction_Rental_Contract = {
  __typename?: 'transaction_rental_contract';
  approved: Scalars['Boolean'];
  car_id: Scalars['uuid'];
  id: Scalars['uuid'];
  lender_id: Scalars['uuid'];
  rental_date: Scalars['date'];
  renter_id: Scalars['uuid'];
  return_date: Scalars['date'];
  status: Transaction_Rental_Status_Enum;
};

/** aggregated selection of "transaction.rental_contract" */
export type Transaction_Rental_Contract_Aggregate = {
  __typename?: 'transaction_rental_contract_aggregate';
  aggregate?: Maybe<Transaction_Rental_Contract_Aggregate_Fields>;
  nodes: Array<Transaction_Rental_Contract>;
};

/** aggregate fields of "transaction.rental_contract" */
export type Transaction_Rental_Contract_Aggregate_Fields = {
  __typename?: 'transaction_rental_contract_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Rental_Contract_Max_Fields>;
  min?: Maybe<Transaction_Rental_Contract_Min_Fields>;
};


/** aggregate fields of "transaction.rental_contract" */
export type Transaction_Rental_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Rental_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction.rental_contract". All fields are combined with a logical 'AND'. */
export type Transaction_Rental_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Rental_Contract_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Rental_Contract_Bool_Exp>>;
  approved?: InputMaybe<Boolean_Comparison_Exp>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lender_id?: InputMaybe<Uuid_Comparison_Exp>;
  rental_date?: InputMaybe<Date_Comparison_Exp>;
  renter_id?: InputMaybe<Uuid_Comparison_Exp>;
  return_date?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<Transaction_Rental_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction.rental_contract" */
export enum Transaction_Rental_Contract_Constraint {
  /** unique or primary key constraint */
  RentalContractPkey = 'rental_contract_pkey'
}

/** input type for inserting data into table "transaction.rental_contract" */
export type Transaction_Rental_Contract_Insert_Input = {
  approved?: InputMaybe<Scalars['Boolean']>;
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lender_id?: InputMaybe<Scalars['uuid']>;
  rental_date?: InputMaybe<Scalars['date']>;
  renter_id?: InputMaybe<Scalars['uuid']>;
  return_date?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<Transaction_Rental_Status_Enum>;
};

/** aggregate max on columns */
export type Transaction_Rental_Contract_Max_Fields = {
  __typename?: 'transaction_rental_contract_max_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lender_id?: Maybe<Scalars['uuid']>;
  rental_date?: Maybe<Scalars['date']>;
  renter_id?: Maybe<Scalars['uuid']>;
  return_date?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Transaction_Rental_Contract_Min_Fields = {
  __typename?: 'transaction_rental_contract_min_fields';
  car_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lender_id?: Maybe<Scalars['uuid']>;
  rental_date?: Maybe<Scalars['date']>;
  renter_id?: Maybe<Scalars['uuid']>;
  return_date?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "transaction.rental_contract" */
export type Transaction_Rental_Contract_Mutation_Response = {
  __typename?: 'transaction_rental_contract_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Rental_Contract>;
};

/** on conflict condition type for table "transaction.rental_contract" */
export type Transaction_Rental_Contract_On_Conflict = {
  constraint: Transaction_Rental_Contract_Constraint;
  update_columns?: Array<Transaction_Rental_Contract_Update_Column>;
  where?: InputMaybe<Transaction_Rental_Contract_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction.rental_contract". */
export type Transaction_Rental_Contract_Order_By = {
  approved?: InputMaybe<Order_By>;
  car_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lender_id?: InputMaybe<Order_By>;
  rental_date?: InputMaybe<Order_By>;
  renter_id?: InputMaybe<Order_By>;
  return_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_rental_contract */
export type Transaction_Rental_Contract_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transaction.rental_contract" */
export enum Transaction_Rental_Contract_Select_Column {
  /** column name */
  Approved = 'approved',
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  LenderId = 'lender_id',
  /** column name */
  RentalDate = 'rental_date',
  /** column name */
  RenterId = 'renter_id',
  /** column name */
  ReturnDate = 'return_date',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "transaction.rental_contract" */
export type Transaction_Rental_Contract_Set_Input = {
  approved?: InputMaybe<Scalars['Boolean']>;
  car_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lender_id?: InputMaybe<Scalars['uuid']>;
  rental_date?: InputMaybe<Scalars['date']>;
  renter_id?: InputMaybe<Scalars['uuid']>;
  return_date?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<Transaction_Rental_Status_Enum>;
};

/** update columns of table "transaction.rental_contract" */
export enum Transaction_Rental_Contract_Update_Column {
  /** column name */
  Approved = 'approved',
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  LenderId = 'lender_id',
  /** column name */
  RentalDate = 'rental_date',
  /** column name */
  RenterId = 'renter_id',
  /** column name */
  ReturnDate = 'return_date',
  /** column name */
  Status = 'status'
}

/** columns and relationships of "transaction.rental_status" */
export type Transaction_Rental_Status = {
  __typename?: 'transaction_rental_status';
  value: Scalars['String'];
};

/** aggregated selection of "transaction.rental_status" */
export type Transaction_Rental_Status_Aggregate = {
  __typename?: 'transaction_rental_status_aggregate';
  aggregate?: Maybe<Transaction_Rental_Status_Aggregate_Fields>;
  nodes: Array<Transaction_Rental_Status>;
};

/** aggregate fields of "transaction.rental_status" */
export type Transaction_Rental_Status_Aggregate_Fields = {
  __typename?: 'transaction_rental_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Rental_Status_Max_Fields>;
  min?: Maybe<Transaction_Rental_Status_Min_Fields>;
};


/** aggregate fields of "transaction.rental_status" */
export type Transaction_Rental_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Rental_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction.rental_status". All fields are combined with a logical 'AND'. */
export type Transaction_Rental_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Rental_Status_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Rental_Status_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction.rental_status" */
export enum Transaction_Rental_Status_Constraint {
  /** unique or primary key constraint */
  RentalStatusPkey = 'rental_status_pkey'
}

export enum Transaction_Rental_Status_Enum {
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  Unfinished = 'UNFINISHED',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

/** Boolean expression to compare columns of type "transaction_rental_status_enum". All fields are combined with logical 'AND'. */
export type Transaction_Rental_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Rental_Status_Enum>;
  _in?: InputMaybe<Array<Transaction_Rental_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Transaction_Rental_Status_Enum>;
  _nin?: InputMaybe<Array<Transaction_Rental_Status_Enum>>;
};

/** input type for inserting data into table "transaction.rental_status" */
export type Transaction_Rental_Status_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Rental_Status_Max_Fields = {
  __typename?: 'transaction_rental_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Rental_Status_Min_Fields = {
  __typename?: 'transaction_rental_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transaction.rental_status" */
export type Transaction_Rental_Status_Mutation_Response = {
  __typename?: 'transaction_rental_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Rental_Status>;
};

/** on conflict condition type for table "transaction.rental_status" */
export type Transaction_Rental_Status_On_Conflict = {
  constraint: Transaction_Rental_Status_Constraint;
  update_columns?: Array<Transaction_Rental_Status_Update_Column>;
  where?: InputMaybe<Transaction_Rental_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction.rental_status". */
export type Transaction_Rental_Status_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_rental_status */
export type Transaction_Rental_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "transaction.rental_status" */
export enum Transaction_Rental_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "transaction.rental_status" */
export type Transaction_Rental_Status_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction.rental_status" */
export enum Transaction_Rental_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "transaction.transaction" */
export type Transaction_Transaction = {
  __typename?: 'transaction_transaction';
  charges: Scalars['numeric'];
  from: Scalars['uuid'];
  id: Scalars['uuid'];
  payment_amount: Scalars['Int'];
  payment_date: Scalars['date'];
  to: Scalars['uuid'];
};

/** aggregated selection of "transaction.transaction" */
export type Transaction_Transaction_Aggregate = {
  __typename?: 'transaction_transaction_aggregate';
  aggregate?: Maybe<Transaction_Transaction_Aggregate_Fields>;
  nodes: Array<Transaction_Transaction>;
};

/** aggregate fields of "transaction.transaction" */
export type Transaction_Transaction_Aggregate_Fields = {
  __typename?: 'transaction_transaction_aggregate_fields';
  avg?: Maybe<Transaction_Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Transaction_Max_Fields>;
  min?: Maybe<Transaction_Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction.transaction" */
export type Transaction_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Transaction_Avg_Fields = {
  __typename?: 'transaction_transaction_avg_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction.transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Transaction_Bool_Exp>>;
  charges?: InputMaybe<Numeric_Comparison_Exp>;
  from?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_amount?: InputMaybe<Int_Comparison_Exp>;
  payment_date?: InputMaybe<Date_Comparison_Exp>;
  to?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction.transaction" */
export enum Transaction_Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "transaction.transaction" */
export type Transaction_Transaction_Inc_Input = {
  charges?: InputMaybe<Scalars['numeric']>;
  payment_amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction.transaction" */
export type Transaction_Transaction_Insert_Input = {
  charges?: InputMaybe<Scalars['numeric']>;
  from?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  payment_amount?: InputMaybe<Scalars['Int']>;
  payment_date?: InputMaybe<Scalars['date']>;
  to?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Transaction_Transaction_Max_Fields = {
  __typename?: 'transaction_transaction_max_fields';
  charges?: Maybe<Scalars['numeric']>;
  from?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  payment_amount?: Maybe<Scalars['Int']>;
  payment_date?: Maybe<Scalars['date']>;
  to?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Transaction_Transaction_Min_Fields = {
  __typename?: 'transaction_transaction_min_fields';
  charges?: Maybe<Scalars['numeric']>;
  from?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  payment_amount?: Maybe<Scalars['Int']>;
  payment_date?: Maybe<Scalars['date']>;
  to?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "transaction.transaction" */
export type Transaction_Transaction_Mutation_Response = {
  __typename?: 'transaction_transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Transaction>;
};

/** on conflict condition type for table "transaction.transaction" */
export type Transaction_Transaction_On_Conflict = {
  constraint: Transaction_Transaction_Constraint;
  update_columns?: Array<Transaction_Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction.transaction". */
export type Transaction_Transaction_Order_By = {
  charges?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_amount?: InputMaybe<Order_By>;
  payment_date?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_transaction */
export type Transaction_Transaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transaction.transaction" */
export enum Transaction_Transaction_Select_Column {
  /** column name */
  Charges = 'charges',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentAmount = 'payment_amount',
  /** column name */
  PaymentDate = 'payment_date',
  /** column name */
  To = 'to'
}

/** input type for updating data in table "transaction.transaction" */
export type Transaction_Transaction_Set_Input = {
  charges?: InputMaybe<Scalars['numeric']>;
  from?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  payment_amount?: InputMaybe<Scalars['Int']>;
  payment_date?: InputMaybe<Scalars['date']>;
  to?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transaction_Transaction_Stddev_Fields = {
  __typename?: 'transaction_transaction_stddev_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_transaction_stddev_pop_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_transaction_stddev_samp_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Transaction_Transaction_Sum_Fields = {
  __typename?: 'transaction_transaction_sum_fields';
  charges?: Maybe<Scalars['numeric']>;
  payment_amount?: Maybe<Scalars['Int']>;
};

/** update columns of table "transaction.transaction" */
export enum Transaction_Transaction_Update_Column {
  /** column name */
  Charges = 'charges',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentAmount = 'payment_amount',
  /** column name */
  PaymentDate = 'payment_date',
  /** column name */
  To = 'to'
}

/** aggregate var_pop on columns */
export type Transaction_Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_transaction_var_pop_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_transaction_var_samp_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Transaction_Variance_Fields = {
  __typename?: 'transaction_transaction_variance_fields';
  charges?: Maybe<Scalars['Float']>;
  payment_amount?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction.wallet" */
export type Transaction_Wallet = {
  __typename?: 'transaction_wallet';
  amount: Scalars['numeric'];
  id: Scalars['uuid'];
};

/** aggregated selection of "transaction.wallet" */
export type Transaction_Wallet_Aggregate = {
  __typename?: 'transaction_wallet_aggregate';
  aggregate?: Maybe<Transaction_Wallet_Aggregate_Fields>;
  nodes: Array<Transaction_Wallet>;
};

/** aggregate fields of "transaction.wallet" */
export type Transaction_Wallet_Aggregate_Fields = {
  __typename?: 'transaction_wallet_aggregate_fields';
  avg?: Maybe<Transaction_Wallet_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Wallet_Max_Fields>;
  min?: Maybe<Transaction_Wallet_Min_Fields>;
  stddev?: Maybe<Transaction_Wallet_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Wallet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Wallet_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Wallet_Sum_Fields>;
  var_pop?: Maybe<Transaction_Wallet_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Wallet_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Wallet_Variance_Fields>;
};


/** aggregate fields of "transaction.wallet" */
export type Transaction_Wallet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Wallet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Wallet_Avg_Fields = {
  __typename?: 'transaction_wallet_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction.wallet". All fields are combined with a logical 'AND'. */
export type Transaction_Wallet_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Wallet_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Wallet_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Wallet_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction.wallet" */
export enum Transaction_Wallet_Constraint {
  /** unique or primary key constraint */
  WalletPkey = 'wallet_pkey'
}

/** input type for incrementing numeric columns in table "transaction.wallet" */
export type Transaction_Wallet_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "transaction.wallet" */
export type Transaction_Wallet_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Transaction_Wallet_Max_Fields = {
  __typename?: 'transaction_wallet_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Transaction_Wallet_Min_Fields = {
  __typename?: 'transaction_wallet_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "transaction.wallet" */
export type Transaction_Wallet_Mutation_Response = {
  __typename?: 'transaction_wallet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Wallet>;
};

/** on conflict condition type for table "transaction.wallet" */
export type Transaction_Wallet_On_Conflict = {
  constraint: Transaction_Wallet_Constraint;
  update_columns?: Array<Transaction_Wallet_Update_Column>;
  where?: InputMaybe<Transaction_Wallet_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction.wallet". */
export type Transaction_Wallet_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_wallet */
export type Transaction_Wallet_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transaction.wallet" */
export enum Transaction_Wallet_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "transaction.wallet" */
export type Transaction_Wallet_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transaction_Wallet_Stddev_Fields = {
  __typename?: 'transaction_wallet_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Wallet_Stddev_Pop_Fields = {
  __typename?: 'transaction_wallet_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Wallet_Stddev_Samp_Fields = {
  __typename?: 'transaction_wallet_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Transaction_Wallet_Sum_Fields = {
  __typename?: 'transaction_wallet_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
};

/** update columns of table "transaction.wallet" */
export enum Transaction_Wallet_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Transaction_Wallet_Var_Pop_Fields = {
  __typename?: 'transaction_wallet_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Wallet_Var_Samp_Fields = {
  __typename?: 'transaction_wallet_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Wallet_Variance_Fields = {
  __typename?: 'transaction_wallet_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users.prefered_languages" */
export type Users_Prefered_Languages = {
  __typename?: 'users_prefered_languages';
  value: Scalars['String'];
};

/** aggregated selection of "users.prefered_languages" */
export type Users_Prefered_Languages_Aggregate = {
  __typename?: 'users_prefered_languages_aggregate';
  aggregate?: Maybe<Users_Prefered_Languages_Aggregate_Fields>;
  nodes: Array<Users_Prefered_Languages>;
};

/** aggregate fields of "users.prefered_languages" */
export type Users_Prefered_Languages_Aggregate_Fields = {
  __typename?: 'users_prefered_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Prefered_Languages_Max_Fields>;
  min?: Maybe<Users_Prefered_Languages_Min_Fields>;
};


/** aggregate fields of "users.prefered_languages" */
export type Users_Prefered_Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Prefered_Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users.prefered_languages". All fields are combined with a logical 'AND'. */
export type Users_Prefered_Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Prefered_Languages_Bool_Exp>>;
  _not?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Prefered_Languages_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users.prefered_languages" */
export enum Users_Prefered_Languages_Constraint {
  /** unique or primary key constraint */
  PreferedLanguagesPkey = 'prefered_languages_pkey'
}

export enum Users_Prefered_Languages_Enum {
  En = 'EN',
  Ro = 'RO'
}

/** Boolean expression to compare columns of type "users_prefered_languages_enum". All fields are combined with logical 'AND'. */
export type Users_Prefered_Languages_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Users_Prefered_Languages_Enum>;
  _in?: InputMaybe<Array<Users_Prefered_Languages_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Users_Prefered_Languages_Enum>;
  _nin?: InputMaybe<Array<Users_Prefered_Languages_Enum>>;
};

/** input type for inserting data into table "users.prefered_languages" */
export type Users_Prefered_Languages_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Prefered_Languages_Max_Fields = {
  __typename?: 'users_prefered_languages_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Prefered_Languages_Min_Fields = {
  __typename?: 'users_prefered_languages_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users.prefered_languages" */
export type Users_Prefered_Languages_Mutation_Response = {
  __typename?: 'users_prefered_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Prefered_Languages>;
};

/** on conflict condition type for table "users.prefered_languages" */
export type Users_Prefered_Languages_On_Conflict = {
  constraint: Users_Prefered_Languages_Constraint;
  update_columns?: Array<Users_Prefered_Languages_Update_Column>;
  where?: InputMaybe<Users_Prefered_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "users.prefered_languages". */
export type Users_Prefered_Languages_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_prefered_languages */
export type Users_Prefered_Languages_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "users.prefered_languages" */
export enum Users_Prefered_Languages_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "users.prefered_languages" */
export type Users_Prefered_Languages_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users.prefered_languages" */
export enum Users_Prefered_Languages_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "users.role_name" */
export type Users_Role_Name = {
  __typename?: 'users_role_name';
  value: Scalars['String'];
};

/** aggregated selection of "users.role_name" */
export type Users_Role_Name_Aggregate = {
  __typename?: 'users_role_name_aggregate';
  aggregate?: Maybe<Users_Role_Name_Aggregate_Fields>;
  nodes: Array<Users_Role_Name>;
};

/** aggregate fields of "users.role_name" */
export type Users_Role_Name_Aggregate_Fields = {
  __typename?: 'users_role_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Role_Name_Max_Fields>;
  min?: Maybe<Users_Role_Name_Min_Fields>;
};


/** aggregate fields of "users.role_name" */
export type Users_Role_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Role_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users.role_name". All fields are combined with a logical 'AND'. */
export type Users_Role_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Role_Name_Bool_Exp>>;
  _not?: InputMaybe<Users_Role_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Role_Name_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users.role_name" */
export enum Users_Role_Name_Constraint {
  /** unique or primary key constraint */
  RoleNamePkey = 'roleName_pkey',
  /** unique or primary key constraint */
  RoleNameValueKey = 'roleName_value_key'
}

export enum Users_Role_Name_Enum {
  Admin = 'ADMIN',
  Lender = 'LENDER',
  Renter = 'RENTER',
  User = 'USER'
}

/** Boolean expression to compare columns of type "users_role_name_enum". All fields are combined with logical 'AND'. */
export type Users_Role_Name_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Users_Role_Name_Enum>;
  _in?: InputMaybe<Array<Users_Role_Name_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Users_Role_Name_Enum>;
  _nin?: InputMaybe<Array<Users_Role_Name_Enum>>;
};

/** input type for inserting data into table "users.role_name" */
export type Users_Role_Name_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Role_Name_Max_Fields = {
  __typename?: 'users_role_name_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Role_Name_Min_Fields = {
  __typename?: 'users_role_name_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users.role_name" */
export type Users_Role_Name_Mutation_Response = {
  __typename?: 'users_role_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Role_Name>;
};

/** on conflict condition type for table "users.role_name" */
export type Users_Role_Name_On_Conflict = {
  constraint: Users_Role_Name_Constraint;
  update_columns?: Array<Users_Role_Name_Update_Column>;
  where?: InputMaybe<Users_Role_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "users.role_name". */
export type Users_Role_Name_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_role_name */
export type Users_Role_Name_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "users.role_name" */
export enum Users_Role_Name_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "users.role_name" */
export type Users_Role_Name_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users.role_name" */
export enum Users_Role_Name_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "users.roles" */
export type Users_Roles = {
  __typename?: 'users_roles';
  id: Scalars['uuid'];
  role_type: Users_Role_Name_Enum;
};

/** aggregated selection of "users.roles" */
export type Users_Roles_Aggregate = {
  __typename?: 'users_roles_aggregate';
  aggregate?: Maybe<Users_Roles_Aggregate_Fields>;
  nodes: Array<Users_Roles>;
};

/** aggregate fields of "users.roles" */
export type Users_Roles_Aggregate_Fields = {
  __typename?: 'users_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Roles_Max_Fields>;
  min?: Maybe<Users_Roles_Min_Fields>;
};


/** aggregate fields of "users.roles" */
export type Users_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users.roles". All fields are combined with a logical 'AND'. */
export type Users_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Roles_Bool_Exp>>;
  _not?: InputMaybe<Users_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Roles_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role_type?: InputMaybe<Users_Role_Name_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "users.roles" */
export enum Users_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "users.roles" */
export type Users_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role_type?: InputMaybe<Users_Role_Name_Enum>;
};

/** aggregate max on columns */
export type Users_Roles_Max_Fields = {
  __typename?: 'users_roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Roles_Min_Fields = {
  __typename?: 'users_roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users.roles" */
export type Users_Roles_Mutation_Response = {
  __typename?: 'users_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Roles>;
};

/** on conflict condition type for table "users.roles" */
export type Users_Roles_On_Conflict = {
  constraint: Users_Roles_Constraint;
  update_columns?: Array<Users_Roles_Update_Column>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "users.roles". */
export type Users_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_roles */
export type Users_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users.roles" */
export enum Users_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleType = 'role_type'
}

/** input type for updating data in table "users.roles" */
export type Users_Roles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role_type?: InputMaybe<Users_Role_Name_Enum>;
};

/** update columns of table "users.roles" */
export enum Users_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleType = 'role_type'
}

/** columns and relationships of "users.user" */
export type Users_User = {
  __typename?: 'users_user';
  date_registered?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Users_Prefered_Languages_Enum>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "users.user" */
export type Users_User_Aggregate = {
  __typename?: 'users_user_aggregate';
  aggregate?: Maybe<Users_User_Aggregate_Fields>;
  nodes: Array<Users_User>;
};

/** aggregate fields of "users.user" */
export type Users_User_Aggregate_Fields = {
  __typename?: 'users_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_User_Max_Fields>;
  min?: Maybe<Users_User_Min_Fields>;
};


/** aggregate fields of "users.user" */
export type Users_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users.user". All fields are combined with a logical 'AND'. */
export type Users_User_Bool_Exp = {
  _and?: InputMaybe<Array<Users_User_Bool_Exp>>;
  _not?: InputMaybe<Users_User_Bool_Exp>;
  _or?: InputMaybe<Array<Users_User_Bool_Exp>>;
  date_registered?: InputMaybe<Date_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  preferred_language?: InputMaybe<Users_Prefered_Languages_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  wallet_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users.user" */
export enum Users_User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for inserting data into table "users.user" */
export type Users_User_Insert_Input = {
  date_registered?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  preferred_language?: InputMaybe<Users_Prefered_Languages_Enum>;
  updated_at?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  wallet_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_User_Max_Fields = {
  __typename?: 'users_user_max_fields';
  date_registered?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_User_Min_Fields = {
  __typename?: 'users_user_min_fields';
  date_registered?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users.user" */
export type Users_User_Mutation_Response = {
  __typename?: 'users_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_User>;
};

/** on conflict condition type for table "users.user" */
export type Users_User_On_Conflict = {
  constraint: Users_User_Constraint;
  update_columns?: Array<Users_User_Update_Column>;
  where?: InputMaybe<Users_User_Bool_Exp>;
};

/** Ordering options when selecting data from "users.user". */
export type Users_User_Order_By = {
  date_registered?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  preferred_language?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_user */
export type Users_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "users.user_roles" */
export type Users_User_Roles = {
  __typename?: 'users_user_roles';
  id: Scalars['uuid'];
  role_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "users.user_roles" */
export type Users_User_Roles_Aggregate = {
  __typename?: 'users_user_roles_aggregate';
  aggregate?: Maybe<Users_User_Roles_Aggregate_Fields>;
  nodes: Array<Users_User_Roles>;
};

/** aggregate fields of "users.user_roles" */
export type Users_User_Roles_Aggregate_Fields = {
  __typename?: 'users_user_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_User_Roles_Max_Fields>;
  min?: Maybe<Users_User_Roles_Min_Fields>;
};


/** aggregate fields of "users.user_roles" */
export type Users_User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users.user_roles". All fields are combined with a logical 'AND'. */
export type Users_User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Users_User_Roles_Bool_Exp>>;
  _not?: InputMaybe<Users_User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Users_User_Roles_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users.user_roles" */
export enum Users_User_Roles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey'
}

/** input type for inserting data into table "users.user_roles" */
export type Users_User_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_User_Roles_Max_Fields = {
  __typename?: 'users_user_roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_User_Roles_Min_Fields = {
  __typename?: 'users_user_roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users.user_roles" */
export type Users_User_Roles_Mutation_Response = {
  __typename?: 'users_user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_User_Roles>;
};

/** on conflict condition type for table "users.user_roles" */
export type Users_User_Roles_On_Conflict = {
  constraint: Users_User_Roles_Constraint;
  update_columns?: Array<Users_User_Roles_Update_Column>;
  where?: InputMaybe<Users_User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "users.user_roles". */
export type Users_User_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_user_roles */
export type Users_User_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users.user_roles" */
export enum Users_User_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users.user_roles" */
export type Users_User_Roles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "users.user_roles" */
export enum Users_User_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** select columns of table "users.user" */
export enum Users_User_Select_Column {
  /** column name */
  DateRegistered = 'date_registered',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  WalletId = 'wallet_id'
}

/** input type for updating data in table "users.user" */
export type Users_User_Set_Input = {
  date_registered?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  preferred_language?: InputMaybe<Users_Prefered_Languages_Enum>;
  updated_at?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  wallet_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "users.user" */
export enum Users_User_Update_Column {
  /** column name */
  DateRegistered = 'date_registered',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  WalletId = 'wallet_id'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users_user: Array<{ __typename?: 'users_user', id: any }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users_user(order_by: {username: asc}) {
    id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;