{
  "woocommerce_order_refunds": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "up": [
        "object"
      ]
    },
    "id": "number",
    "date_created": "string",
    "date_created_gmt": "string",
    "amount": "string",
    "reason": "string",
    "refunded_by": "number",
    "meta_data": [],
    "line_items": [
      {
        "id": "object",
        "name": "object",
        "product_id": "object",
        "variation_id": "object",
        "quantity": "object",
        "tax_class": "object",
        "subtotal": "object",
        "subtotal_tax": "object",
        "total": "object",
        "total_tax": "object",
        "taxes": "object",
        "meta_data": "object",
        "sku": "object",
        "price": "object",
        "image": "object",
        "parent_name": "object"
      }
    ]
  },
  "monitor_category_sync_from_pos_to_woo": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number_of_pending_variables": "number",
    "_created": "Date"
  },
  "cova_customer_temp": "empty",
  "scheduled_reports": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "creator": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "description": "string",
    "frequency": "number",
    "timezone": "string",
    "send_emails": "boolean",
    "recipients": [
      "string"
    ],
    "components": [
      {
        "type": "object",
        "store_id": "object",
        "config": "object"
      }
    ]
  },
  "flowhub_budtenders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "lastest_tendered_time": "Date",
    "name": "string"
  },
  "cova_master_catalog": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "Id": "string",
    "Assets": [
      {
        "Id": "object",
        "Name": "object",
        "Uri": "object",
        "Type": "object",
        "IsHidden": "object",
        "IsRolledUp": "object"
      }
    ],
    "CanonicalClassification": {
      "TreeId": "number",
      "Id": "number",
      "Name": "string",
      "ParentCategories": []
    },
    "ColorDefinition": "null",
    "Entity": "null",
    "HasColor": "boolean",
    "HeroShotId": "null",
    "HeroShotUri": "null",
    "IsArchived": "boolean",
    "IsLinkedToCuratedProduct": "boolean",
    "IsSaleable": "boolean",
    "LongDescription": "string",
    "MSRP": "null",
    "Manufacturer": "null",
    "ManufacturerSkus": [],
    "MasterProductId": "number",
    "Name": "string",
    "Owner": {
      "Id": "number",
      "Name": "string"
    },
    "Region": "null",
    "ReleaseDate": "null",
    "ShortDescription": "string",
    "Specifications": [
      {
        "Id": "object",
        "Name": "object",
        "Fields": "object"
      }
    ],
    "UpcCodes": [],
    "VariationId": "null",
    "VariationInfo": [
      {
        "VariationId": "object",
        "Slug": "object",
        "Fields": "object"
      }
    ],
    "VendorSkus": [],
    "Version": "number",
    "_created": "Date",
    "_updated": "Date",
    "sync_status": "string",
    "syncing_at": "Date"
  },
  "cova_order_refund": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "OriginalInvoiceId": "string",
    "LocationId": "number",
    "UserId": "number",
    "OriginallyCreatedByUserId": "null",
    "PrintableId": "string",
    "OriginalPrintableId": "string",
    "ReceiptNumber": "string",
    "OriginalReceiptNumber": "string",
    "Notes": "string",
    "Annotation": "string",
    "InvoiceType": "string",
    "Customer": "null",
    "Orders": [
      {
        "Id": "object",
        "PrintableId": "object",
        "ReferenceId": "object",
        "Items": "object"
      }
    ],
    "DropshipOrders": [],
    "Payments": [
      {
        "Id": "object",
        "OriginalPaymentId": "object",
        "DrawerId": "object",
        "Last4Digits": "object",
        "CustomerAccountId": "object",
        "PaymentMethodId": "object",
        "PaymentMethodName": "object",
        "Amount": "object",
        "TransactionDateUtc": "object"
      }
    ],
    "Discounts": "null",
    "ChangeDue": "number",
    "CashBack": "number",
    "TaxCalculationResult": {
      "Id": "string",
      "Lines": [
        "object"
      ]
    },
    "SaleOverrides": "null",
    "CreatedByUser": "string",
    "OriginallyCreatedByUser": "null",
    "CreatedDateUtc": "string",
    "PricingScheme": "string",
    "CompanyId": "number",
    "_created": "Date",
    "sync_status": "string",
    "created_date_utc": "Date"
  },
  "greenline_orders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "number",
    "location_id": "number",
    "_created": "Date",
    "_updated": "Date",
    "cartDiscounts": [],
    "completeDate": "null",
    "completedPayment": "null",
    "createDate": "Date",
    "customId": "string",
    "customerId": "string",
    "customerName": "string",
    "deviceId": "null",
    "deviceName": "string",
    "employeeId": "null",
    "employeeName": "null",
    "lines": [
      {
        "id": "object",
        "productId": "object",
        "productName": "object",
        "subTotal": "object",
        "discount": "object",
        "discountId": "object",
        "quantity": "object",
        "total": "object"
      }
    ],
    "notes": "string",
    "orderType": "string",
    "order_source": "string",
    "pennyRounding": "number",
    "refundPaymentId": "null",
    "source": "number",
    "status": "string",
    "subTotal": "number",
    "tax": "number",
    "taxes": [],
    "total": "number",
    "total_items": "number",
    "transactions": []
  },
  "store_credentials": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "cova_access_token": "string",
    "cova_expired_at": "Date"
  },
  "greenline_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "string",
    "_created": "Date",
    "_shipping_dob": "null",
    "_updated": "Date",
    "address": {
      "address": "string",
      "city": "string",
      "province": "string",
      "country": "string",
      "postalCode": "string"
    },
    "average_order_amount": "number",
    "average_order_items": "number",
    "billing": {
      "phone": "string",
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "null",
      "city": "string",
      "postcode": "string",
      "country": "string",
      "state": "string"
    },
    "birthday": "null",
    "bought_product_ids": [],
    "clv": "number",
    "companyId": "number",
    "completed_orders": "number",
    "createDate": "string",
    "creditBalance": "number",
    "email": "string",
    "first_completed_order_date": "null",
    "first_completed_order_date_at": {},
    "first_name": "string",
    "gender": "null",
    "last_name": "string",
    "last_order_date": "Date",
    "loyaltyTierId": "null",
    "name": "string",
    "payment_method_ids": [],
    "phone": "string",
    "purchase_location_ids": [],
    "shipping": {
      "phone": "string",
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "null",
      "city": "string",
      "postcode": "string",
      "country": "string",
      "state": "string"
    },
    "total_online_orders": "number",
    "total_order_items": "number",
    "total_orders": "number",
    "total_pos_orders": "number",
    "username": "null"
  },
  "generated_reports": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "scheduled_report_id": {
      "buffer": "Buffer/Binary"
    },
    "timezone": "string",
    "start_date": "string",
    "end_date": "string",
    "components": [
      {
        "type": "object",
        "store_id": "object",
        "config": "object",
        "store_name": "object",
        "data": "object"
      }
    ]
  },
  "configs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "key": "string",
    "data": {
      "baked": {
        "server_id": "object",
        "app_id": "object",
        "name": "object",
        "thumbnail": "object"
      }
    }
  },
  "user_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "email": "string",
    "endpoint": "string",
    "data": {
      "store_id": [
        "object"
      ],
      "organization_id": [
        "object"
      ],
      "action": [
        "object"
      ],
      "parameters": [
        "object"
      ]
    },
    "user_agent": "string",
    "source": "string",
    "ip": "string",
    "_created": "Date"
  },
  "lightspeed_user": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "account_type": "string",
    "created_at": "string",
    "deleted_at": "null",
    "display_name": "string",
    "email": "string",
    "email_verified_at": "string",
    "enabled": "boolean",
    "enabled_mfa": "null",
    "image_source": "string",
    "images": "null",
    "is_primary_user": "boolean",
    "permissions": "null",
    "require_password_change": "boolean",
    "restricted_outlet_id": "null",
    "restricted_outlet_ids": [],
    "roles": [
      {
        "id": "object",
        "name": "object",
        "system_role_id": "object"
      }
    ],
    "rules": {},
    "seen_at": "string",
    "switch_id": "string",
    "target_daily": "null",
    "target_monthly": "null",
    "target_weekly": "null",
    "time_until_deletion": "null",
    "updated_at": "string",
    "username": "string",
    "version": "number",
    "lastest_tendered_time": "Date"
  },
  "fulfillment_labels": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "label": "string"
  },
  "woocommerce_shipping_classes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "description": "string",
    "count": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "schedule_sync": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "webhooks": [
      {
        "webhook_action": "object",
        "webhook_data": "object"
      }
    ],
    "_created": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "promotion_composite_product": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "permalink": "string",
    "date_created": "string",
    "date_created_gmt": "string",
    "date_modified": "string",
    "date_modified_gmt": "string",
    "type": "string",
    "status": "string",
    "featured": "boolean",
    "catalog_visibility": "string",
    "description": "string",
    "short_description": "string",
    "sku": "string",
    "price": "string",
    "regular_price": "string",
    "sale_price": "string",
    "date_on_sale_from": "null",
    "date_on_sale_from_gmt": "null",
    "date_on_sale_to": "null",
    "date_on_sale_to_gmt": "null",
    "on_sale": "boolean",
    "purchasable": "boolean",
    "total_sales": "number",
    "virtual": "boolean",
    "downloadable": "boolean",
    "downloads": [],
    "download_limit": "number",
    "download_expiry": "number",
    "external_url": "string",
    "button_text": "string",
    "tax_status": "string",
    "tax_class": "string",
    "manage_stock": "boolean",
    "stock_quantity": "null",
    "backorders": "string",
    "backorders_allowed": "boolean",
    "backordered": "boolean",
    "low_stock_amount": "null",
    "sold_individually": "boolean",
    "weight": "string",
    "dimensions": {
      "length": "string",
      "width": "string",
      "height": "string"
    },
    "shipping_required": "boolean",
    "shipping_taxable": "boolean",
    "shipping_class": "string",
    "shipping_class_id": "number",
    "reviews_allowed": "boolean",
    "average_rating": "string",
    "rating_count": "number",
    "upsell_ids": [],
    "cross_sell_ids": [],
    "parent_id": "number",
    "purchase_note": "string",
    "categories": [
      {
        "id": "object",
        "name": "object",
        "slug": "object"
      }
    ],
    "brands": [],
    "tags": [],
    "images": [
      {
        "id": "object",
        "date_created": "object",
        "date_created_gmt": "object",
        "date_modified": "object",
        "date_modified_gmt": "object",
        "src": "object",
        "name": "object",
        "alt": "object"
      }
    ],
    "attributes": [],
    "default_attributes": [],
    "variations": [],
    "grouped_products": [],
    "menu_order": "number",
    "price_html": "string",
    "related_ids": [
      "number"
    ],
    "meta_data": [
      {
        "id": "object",
        "key": "object",
        "value": "object"
      }
    ],
    "stock_status": "string",
    "has_options": "boolean",
    "post_password": "string",
    "global_unique_id": "string",
    "permalink_template": "string",
    "generated_slug": "string",
    "composite_virtual": "boolean",
    "composite_layout": "string",
    "composite_add_to_cart_form_location": "string",
    "composite_editable_in_cart": "boolean",
    "composite_sold_individually_context": "string",
    "composite_shop_price_calc": "string",
    "composite_components": [
      {
        "id": "object",
        "title": "object",
        "description": "object",
        "query_type": "object",
        "query_ids": "object",
        "default_option_id": "object",
        "thumbnail_id": "object",
        "thumbnail_src": "object",
        "quantity_min": "object",
        "quantity_max": "object",
        "priced_individually": "object",
        "shipped_individually": "object",
        "optional": "object",
        "discount": "object",
        "options_style": "object",
        "pagination_style": "object",
        "display_prices": "object",
        "show_sorting_options": "object",
        "show_filtering_options": "object",
        "attribute_filter_ids": "object",
        "product_title_visible": "object",
        "product_descr_visible": "object",
        "product_price_visible": "object",
        "product_thumb_visible": "object",
        "subtotal_visible_product": "object",
        "subtotal_visible_cart": "object",
        "subtotal_visible_orders": "object"
      }
    ],
    "composite_scenarios": [],
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "location_id_str": "string",
    "location_id": "number",
    "promotion_id_str": "string",
    "promotion_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "marketing_email": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "from_email": "string",
    "to_emails": [
      "string"
    ],
    "subject": "string",
    "html_content": "string",
    "attachments": [
      {
        "id": "object",
        "name": "object",
        "content_type": "object"
      }
    ],
    "send_me_a_copy": "boolean",
    "status": "string",
    "sender_email": "string",
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "lightspeed_location": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "attributes": [
      {
        "key": "object",
        "value": "object"
      }
    ],
    "currency": "string",
    "currency_symbol": "string",
    "default_tax_id": "string",
    "deleted_at": "null",
    "display_prices": "string",
    "email": "string",
    "latitude": "string",
    "longitude": "string",
    "name": "string",
    "phone": "string",
    "physical_address_1": "string",
    "physical_address_2": "string",
    "physical_city": "string",
    "physical_country_id": "string",
    "physical_postcode": "string",
    "physical_state": "string",
    "physical_suburb": "string",
    "time_zone": "string",
    "version": "number"
  },
  "contents": "empty",
  "image_mapping": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "source_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "source_type": "string",
    "woo_id": "number"
  },
  "flowhub_categories": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "categories": [
      "string"
    ],
    "custom_categories": [
      "string"
    ],
    "types": [
      "string"
    ]
  },
  "organizations_backup": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_name": "string",
    "organization_users": [
      {
        "user_id": "object",
        "is_owner": "object",
        "is_ga": "object",
        "assigned_stores": "object",
        "assigned_warehouses": "object"
      }
    ],
    "organization_pending_users": [
      {
        "first_name": "object",
        "last_name": "object",
        "user_email": "object",
        "is_ga": "object",
        "stores": "object"
      }
    ],
    "_created": "Date",
    "_updated": "Date",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "base_charge": "number",
    "base_distance": "number",
    "rate_per_km": "number",
    "sku_sequence": "number",
    "transfer_sequence": "number",
    "adjustment_sequence": "number",
    "tags": [
      "string"
    ],
    "ss_credentials": [
      {
        "uuid": "object",
        "name": "object",
        "key": "object",
        "secret": "object"
      }
    ],
    "selected_ss_credential": "string"
  },
  "stores": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "store_url": "string",
    "store_name": "string",
    "store_category": [],
    "email": "null",
    "webhooks": {
      "APP_UNINSTALLED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "BULK_OPERATIONS_FINISH": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "COLLECTIONS_CREATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "COLLECTIONS_DELETE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "COLLECTIONS_UPDATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_CREATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_DELETE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_DISABLE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_ENABLE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_MARKETING_CONSENT_UPDATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "CUSTOMERS_UPDATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_CANCELLED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_CREATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_DELETE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_EDITED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_FULFILLED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_PAID": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_PARTIALLY_FULFILLED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "ORDERS_UPDATED": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "PRODUCTS_CREATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "PRODUCTS_DELETE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "PRODUCTS_UPDATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      },
      "REFUNDS_CREATE": {
        "createdAt": "object",
        "endpoint": "object",
        "format": "object",
        "id": "object",
        "includeFields": "object",
        "topic": "object",
        "updatedAt": "object"
      }
    },
    "store_type": "string",
    "authenticated": "boolean",
    "sync_completed": "boolean",
    "cs_user_email": "string",
    "access_token": "string",
    "api_version": "string",
    "read_all_orders": "boolean",
    "sync_status": "string",
    "test": "boolean",
    "sync_by_bulk_operation_resources": {
      "automatic_discount": "boolean",
      "code_discount": "boolean"
    },
    "cs_store_id": "string",
    "screenshot_url": "string",
    "resync_from_woo": {
      "ran_at": "Date",
      "failed_at": "Date"
    }
  },
  "user_subscriptions": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "subscription_info": [],
    "subscription_topics": [
      "string"
    ],
    "_created": "Date",
    "_updated": "Date",
    "deactivated": "boolean"
  },
  "shopify_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "topic": "string",
    "hmac_sha256": "string",
    "shop_domain": "string",
    "api_version": "string",
    "webhook_id": "string",
    "data": {
      "admin_graphql_api_id": "string",
      "completed_at": "string",
      "created_at": "string",
      "error_code": "null",
      "status": "string",
      "type": "string"
    },
    "status": "number",
    "_created": "Date",
    "_updated": "Date",
    "log": "string"
  },
  "onfleet_records": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "onfleet_id": "string",
    "task_data": {
      "id": "string",
      "timeCreated": "number",
      "timeLastModified": "number",
      "organization": "string",
      "shortId": "string",
      "trackingURL": "string",
      "worker": "null",
      "merchant": "string",
      "executor": "string",
      "creator": "string",
      "dependencies": [
        "object"
      ],
      "state": "number",
      "completeAfter": "null",
      "completeBefore": "null",
      "pickupTask": "boolean",
      "notes": "string",
      "completionDetails": {
        "failureNotes": "object",
        "failureReason": "object",
        "events": "object",
        "actions": "object",
        "time": "object",
        "firstLocation": "object",
        "lastLocation": "object",
        "unavailableAttachments": "object"
      },
      "feedback": [],
      "metadata": [
        "object"
      ],
      "overrides": {
        "recipientName": "object",
        "recipientNotes": "object",
        "recipientSkipSMSNotifications": "object",
        "useMerchantForProxy": "object"
      },
      "quantity": "number",
      "additionalQuantities": {
        "quantityA": "object",
        "quantityB": "object",
        "quantityC": "object"
      },
      "serviceTime": "number",
      "identity": {
        "failedScanCount": "object",
        "checksum": "object"
      },
      "appearance": {
        "triangleColor": "object"
      },
      "scanOnlyRequiredBarcodes": "boolean",
      "requirements": {
        "signature": "object",
        "notes": "object",
        "photo": "object",
        "minimumAge": "object"
      },
      "container": {
        "type": "object",
        "organization": "object"
      },
      "trackingViewed": "boolean",
      "destination": {
        "id": "object",
        "timeCreated": "object",
        "timeLastModified": "object",
        "location": "object",
        "address": "object",
        "notes": "object",
        "metadata": "object",
        "googlePlaceId": "object",
        "warnings": "object"
      },
      "recipients": [
        "object"
      ]
    },
    "updated_at_local": "Date",
    "updated_at_utc": "Date",
    "is_deleted_from_onfleet": "boolean"
  },
  "woocommerce_brand": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "_updated": "Date",
    "count": "number",
    "description": "string",
    "display": "string",
    "image": "null",
    "menu_order": "number",
    "name": "string",
    "parent": "number",
    "slug": "string"
  },
  "green_check_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "crb_id": "string",
    "description": "string",
    "gc_created_date": "string",
    "gc_created_date_local": "string",
    "gc_net_weight_grams": "number",
    "gc_product_category_name": "string",
    "images": [
      {
        "url": "object"
      }
    ],
    "medicated": "boolean",
    "name": "string",
    "pos_brand_name": "string",
    "pos_product_category_name": "string",
    "pos_product_id": "string",
    "pos_product_subcategory_name": "null",
    "pos_strain_name": "string",
    "pos_type": "string",
    "pos_unit_of_measure": "string",
    "pos_updated_date": "string",
    "pos_updated_date_local": "string",
    "price": "number",
    "price_tiers": "null",
    "sku": "string",
    "unit_cost": "null",
    "syncing_at": "Date",
    "woo_mapping": {
      "variable_id": "number",
      "locations": {
        "a54f983c-0299-4712-9ea2-92690e388ffb": "object"
      }
    },
    "product_sync_status": "string"
  },
  "cova_tax_rate_temp": "empty",
  "lightspeed_register": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "ask_for_note_on_save": "number",
    "ask_for_user_on_sale": "boolean",
    "attributes": [],
    "button_layout_id": "null",
    "cash_managed_payment_type_id": "null",
    "deleted_at": "null",
    "email_receipt": "boolean",
    "invoice_prefix": "string",
    "invoice_sequence": "number",
    "invoice_suffix": "string",
    "is_open": "boolean",
    "is_quick_keys_enabled": "boolean",
    "name": "string",
    "outlet_id": "string",
    "print_note_on_receipt": "boolean",
    "print_receipt": "boolean",
    "receipt_template_id": "string",
    "register_close_time": "null",
    "register_open_sequence_id": "string",
    "register_open_time": "string",
    "show_discounts_on_receipts": "boolean",
    "version": "number"
  },
  "cova_tax_rate": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "CompanyId": "number",
    "Name": "string",
    "DisplayName": "string",
    "Description": "null",
    "Rate": "number",
    "TaxRateType": "string",
    "TaxCalculatedOn": "string",
    "Layer": "number",
    "StartDateUtc": "string",
    "EndDateUtc": "string",
    "IsActive": "boolean",
    "SyncStatus": "number",
    "WooSyncStatus": "number"
  },
  "announcement_user_reads": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "announcement_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "created_at": "Date",
    "updated_at": "Date"
  },
  "organizations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_name": "string",
    "_created": "Date",
    "_updated": "Date",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "base_charge": "number",
    "base_distance": "number",
    "rate_per_km": "number",
    "sku_sequence": "number",
    "transfer_sequence": "number",
    "adjustment_sequence": "number",
    "tags": [
      "string"
    ],
    "ss_credentials": [
      {
        "uuid": "object",
        "name": "object",
        "key": "object",
        "secret": "object"
      }
    ],
    "selected_ss_credential": "string",
    "cs_ws_id": "string",
    "profile_type": "number",
    "invited_team_member": "boolean",
    "company_name": "string"
  },
  "cova_classificationtrees": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "Name": "string",
    "Order": "number",
    "ProductCount": "number",
    "MasterProductCount": "number",
    "ProductTemplate": {},
    "TreeId": "number",
    "CompanyId": "number",
    "SyncStatus": "number",
    "WooSyncStatus": "number"
  },
  "cova_archived_catalog": "empty",
  "woocommerce_coupon": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "code": "string",
    "amount": "string",
    "date_created": "string",
    "date_created_gmt": "string",
    "date_modified": "string",
    "date_modified_gmt": "string",
    "discount_type": "string",
    "description": "string",
    "date_expires": "null",
    "date_expires_gmt": "null",
    "usage_count": "number",
    "individual_use": "boolean",
    "product_ids": [],
    "excluded_product_ids": [],
    "usage_limit": "null",
    "usage_limit_per_user": "null",
    "limit_usage_to_x_items": "null",
    "free_shipping": "boolean",
    "product_categories": [],
    "excluded_product_categories": [],
    "exclude_sale_items": "boolean",
    "minimum_amount": "string",
    "maximum_amount": "string",
    "email_restrictions": [],
    "used_by": [],
    "meta_data": [],
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    },
    "coupon_status": "string"
  },
  "woocommerce_shipping_methods": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "shipping_methods": [
      {
        "id": "object",
        "title": "object",
        "description": "object",
        "_links": "object"
      }
    ]
  },
  "blobs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "operator_id": {
      "buffer": "Buffer/Binary"
    },
    "parent_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "content_type": "string",
    "organization_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "plugin_keys": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "allowed_plugins": [
      "string"
    ],
    "api_value": "string"
  },
  "green_check_inventory": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "barcode": "null",
    "crb_id": "string",
    "gc_created_date": "string",
    "gc_created_date_local": "string",
    "location_data": [
      {
        "location_id": "object",
        "name": "object",
        "pos_location_type": "object",
        "quantity": "object"
      }
    ],
    "name": "string",
    "pos_type": "string",
    "pos_updated_date": "string",
    "pos_updated_date_local": "string",
    "product_id": "string",
    "sku": "string",
    "total_quantity": "number"
  },
  "announcements": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "message_description": "string",
    "type": "string",
    "dismiss_behaviors": "string",
    "banner_color": "string",
    "icon": "string",
    "start_time": "Date",
    "end_time": "Date",
    "apply_to_pos": "string",
    "apply_to_provinces_type": "string",
    "timezone": "string",
    "created_by": {
      "buffer": "Buffer/Binary"
    },
    "created_by_name": "string",
    "created_at": "Date",
    "updated_at": "Date",
    "apply_to_provinces": [
      "string"
    ],
    "message_title": "string"
  },
  "cova_bc_catalog_keys": {
    "_id": "string",
    "value": "null"
  },
  "cova_promotion_new": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "PromotionId": "string",
    "CartCondition": {
      "Type": "string"
    },
    "CatalogIds": [
      "string"
    ],
    "CreatedByUserId": "number",
    "CreatedDateTimeUtc": "string",
    "EnabledAtLocationIds": [
      "number"
    ],
    "HumanReadablePromotionType": "string",
    "ICalVEventSchedule": "string",
    "LineCondition": {
      "Type": "string"
    },
    "Name": "string",
    "PromotionType": {
      "Type": "string",
      "PercentOffOfEach": "number",
      "ItemsToMatch": {
        "Type": "object",
        "Conditions": "object"
      }
    },
    "Status": "string",
    "Version": "number"
  },
  "cova_statistic_inventory_quantity_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "company_id": "number",
    "location_id": "number",
    "product_id": "string",
    "quantity": "number"
  },
  "getcake_records": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_number": "string",
    "postback_url": "string",
    "response": "string",
    "revenue": "string",
    "offer_id": "string",
    "affiliate_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "store_waybills": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "service_code": "string",
    "length": "number",
    "width": "number",
    "height": "number",
    "weight": "number",
    "type": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "promotions_settings_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "previous": "string",
    "current": "string",
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_payment_gateway": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "order": "number",
    "enabled": "boolean",
    "method_title": "string",
    "method_description": "string",
    "method_supports": [
      "string"
    ],
    "settings": {
      "title": {
        "id": "object",
        "label": "object",
        "description": "object",
        "type": "object",
        "value": "object",
        "default": "object",
        "tip": "object",
        "placeholder": "object"
      },
      "instructions": {
        "id": "object",
        "label": "object",
        "description": "object",
        "type": "object",
        "value": "object",
        "default": "object",
        "tip": "object",
        "placeholder": "object"
      }
    },
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "statistic_store_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number_of_orders": "number"
  },
  "lightspeed_order": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "location_id": "string",
    "id": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "accounts_transaction_id": "null",
    "adjustments": [],
    "attributes": [],
    "complete_open_sequence_id": "null",
    "created_at": "Date",
    "customer_id": "string",
    "deleted_at": "null",
    "ecom_custom_charges": {
      "charges": [],
      "total_incl": "number",
      "total": "number",
      "total_tax": "number"
    },
    "external_applications": [],
    "has_unsynced_on_account_payments": "null",
    "invoice_number": "string",
    "line_items": [
      {
        "id": "object",
        "product_id": "object",
        "salesperson_id": "object",
        "tax_id": "object",
        "discount_total": "object",
        "discount": "object",
        "price_total": "object",
        "price": "object",
        "cost_total": "object",
        "cost": "object",
        "tax_total": "object",
        "tax": "object",
        "quantity": "object",
        "loyalty_value": "object",
        "note": "object",
        "return_reason": "object",
        "price_set": "object",
        "status": "object",
        "sequence": "object",
        "gift_card_number": "object",
        "tax_components": "object",
        "promotions": "object",
        "surcharges": "object",
        "unit_cost": "object",
        "unit_discount": "object",
        "unit_price": "object",
        "unit_tax": "object",
        "unit_loyalty_value": "object",
        "total_cost": "object",
        "total_discount": "object",
        "total_loyalty_value": "object",
        "total_price": "object",
        "total_tax": "object",
        "is_return": "object"
      }
    ],
    "note": "null",
    "outlet_id": "string",
    "payment_date": "null",
    "payments": [],
    "receipt_number": "string",
    "register_id": "string",
    "return_for": "null",
    "return_ids": [],
    "sale_date": "string",
    "short_code": "string",
    "source": "string",
    "source_id": "null",
    "state": "string",
    "status": "string",
    "taxes": [
      {
        "amount": "object",
        "id": "object"
      }
    ],
    "total_items": "number",
    "total_loyalty": "number",
    "total_price": "number",
    "total_price_incl": "number",
    "total_surcharge": "number",
    "total_tax": "number",
    "updated_at": "string",
    "user_id": "string",
    "version": "number"
  },
  "notifications": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "data": {
      "topic_key": "string",
      "order_id": "number",
      "store_id": {
        "buffer": "object"
      },
      "store_name": "string",
      "warehouse_id": {
        "buffer": "object"
      },
      "warehouse_name": "string",
      "title": "string",
      "type": "string",
      "delivery_date": "string"
    }
  },
  "cova_bc_catalog": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "product_sku": "string",
    "csv_imported": "boolean",
    "product_attributes": "null",
    "product_brand": "string",
    "product_disclaimer": "null",
    "product_image": "string",
    "product_long_description": "string",
    "product_short_description": "string",
    "product_title": "string",
    "product_upc": "number",
    "product_url": "null",
    "updated_at_utc": "Date",
    "product_images": [
      "string"
    ]
  },
  "onfleet_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "onfleet_id": "string",
    "onfleet_short_id": "string",
    "onfleet_organization_id": "string",
    "onfleet_tracking_url": "string",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number",
    "raw_data": {
      "taskId": "string",
      "adminId": "string",
      "actionContext": {
        "type": "object",
        "id": "object"
      },
      "triggerId": "number",
      "triggerName": "string",
      "workerId": "null",
      "data": {
        "task": "object"
      },
      "time": "number"
    },
    "created_at_utc": "Date",
    "created_at_local": "Date",
    "trigger_name": "string"
  },
  "greenline_locations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "number",
    "address": "string",
    "city": "string",
    "email": "string",
    "name": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "province": "string",
    "timezone": "string",
    "description": "string",
    "storeId": "string"
  },
  "blazepay_sessions": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "type": "string",
    "id": "string",
    "attributes": {
      "merchantId": "string",
      "providerId": "string",
      "configurationId": "string",
      "publicKey": "string",
      "allowedOrigins": [
        "object"
      ],
      "accessToken": "string",
      "permissions": {
        "CAN_CREATE_CUSTOMER": "object",
        "CAN_CREATE_PAYMENT_SOURCE": "object",
        "CAN_CREATE_PAYMENT": "object",
        "CAN_READ_PAYMENT": "object"
      },
      "customerId": "string",
      "orderId": "string",
      "requestedAmount": "number",
      "currency": "string",
      "callbackUrl": "string",
      "status": "string",
      "createdAt": "string",
      "updatedAt": "string",
      "expiresAt": "string"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "woocommerce_coupons": "empty",
  "blazepay_capture_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "uuid": "string",
    "payment_id": "string",
    "session_id": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "paramountpay_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "email": "string",
    "merchant_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string"
  },
  "inventory_product_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "inventory_product_id": {
      "buffer": "Buffer/Binary"
    },
    "log_type": "string",
    "operator_id": {
      "buffer": "Buffer/Binary"
    },
    "available": "number",
    "reserved": "number"
  },
  "cova_catalog": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "ExtendedAttributes": "string",
    "DateAddedUtc": "Date",
    "DateUpdatedUtc": "Date",
    "RmsId": "null",
    "MeasurementType": "string",
    "BatchTracking": "boolean",
    "NonStock": "boolean",
    "LifeCycle": "string",
    "Id": "string",
    "Name": "string",
    "MasterProductId": "number",
    "VariationId": "number",
    "Owner": {
      "Id": "number",
      "Name": "string"
    },
    "CanonicalClassification": {
      "TreeId": "number",
      "Id": "number",
      "Name": "string",
      "ParentCategories": [
        "object"
      ]
    },
    "ShortDescription": "string",
    "LongDescription": "string",
    "Manufacturer": "null",
    "MSRP": "null",
    "ReleaseDate": "null",
    "VariationInfo": [],
    "Specifications": [
      {
        "Id": "object",
        "Name": "object",
        "Fields": "object"
      }
    ],
    "Assets": [
      {
        "Id": "object",
        "Name": "object",
        "Uri": "object",
        "Type": "object",
        "IsHidden": "object",
        "IsRolledUp": "object"
      }
    ],
    "ColorDefinition": "null",
    "HeroShotUri": "string",
    "HeroShotId": "string",
    "ManufacturerSkus": [],
    "VendorSkus": [
      {
        "Value": "object",
        "Description": "object",
        "Entity": "object"
      }
    ],
    "UpcCodes": [
      {
        "Value": "object",
        "Description": "object",
        "Entity": "object"
      }
    ],
    "Region": "null",
    "Entity": "null",
    "HasColor": "boolean",
    "IsLinkedToCuratedProduct": "boolean",
    "IsSaleable": "boolean",
    "IsArchived": "boolean",
    "Version": "number",
    "CatalogItemId": "string",
    "CatalogSku": "string",
    "TaxCategory": "string",
    "CompanyId": "number",
    "SyncStatus": "number",
    "WooSyncStatus": "number",
    "sync_status": "string"
  },
  "cova_bc_catalog_k": {
    "_id": "string",
    "value": "null"
  },
  "woocommerce_shipping_zones_locations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "zone_id": "number",
    "locations": [
      {
        "code": "object",
        "type": "object",
        "_links": "object"
      }
    ]
  },
  "lightspeed_variant_product": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "images": [
      {
        "id": "object",
        "sizes": "object"
      }
    ],
    "is_active": "boolean",
    "name": "string",
    "parent_id": "string",
    "price_outlet": {
      "tax_exclusive": "string",
      "loyalty_amount": "null",
      "outlets": [
        "object"
      ]
    },
    "price_standard": "null",
    "primary_sku_code": "string",
    "product_codes": [
      {
        "id": "object",
        "type": "object",
        "code": "object"
      }
    ],
    "variant_definitions": [
      {
        "attribute_id": "object",
        "name": "object",
        "value": "object"
      }
    ],
    "woo_mapping": {
      "locations": {
        "0683d884-6097-11f0-e104-4ba998f4cb13": "object",
        "067d4bf7-fc1b-11f0-f9ca-6cc8cb2c54a0": "object"
      },
      "variable_id": "number"
    }
  },
  "statistic_product_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "profit": "number",
    "quantity": "number",
    "revenue": "number"
  },
  "product_sales_forecasting": "empty",
  "promotions": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "color": "string",
    "note": "string",
    "description": "string",
    "frequency": [],
    "start_date": "string",
    "end_date": "string",
    "start_time": "string",
    "end_time": "string",
    "product_type": "string",
    "all_products": "null",
    "products": {
      "529949": {
        "discount_amount": "object",
        "discount_type": "object"
      }
    },
    "brands": {},
    "categories": {},
    "status": "number",
    "datetime_started_gmt": "null",
    "datetime_ended_gmt": "null",
    "number_of_products_sold": "number",
    "number_of_orders": "number",
    "sale": "number",
    "profit": "number",
    "number_of_products_sold_detail": {
      "products": {},
      "brands": {},
      "categories": {}
    },
    "products_name": [
      "string"
    ],
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "profit_subtotal": "number",
    "sale_subtotal": "number"
  },
  "flowhub_order_ahead": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "location_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "woo_mapping": {
      "id": "number"
    }
  },
  "external_catalog_users": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "email": "string",
    "role": "number"
  },
  "woocommerce_order_notes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "author": "string",
    "date_created": "string",
    "date_created_gmt": "string",
    "note": "string",
    "customer_note": "boolean",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "up": [
        "object"
      ]
    },
    "order_id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "lightspeed_category": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "company_id": "string",
    "PayloadID": "string",
    "_created": "Date",
    "_updated": "Date",
    "category_path": [
      {
        "id": "object",
        "name": "object"
      }
    ],
    "leaf_category": "boolean",
    "name": "string",
    "parent_category_id": "string",
    "root_category_id": "string"
  },
  "pre_mapped_servers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "company_id": "number",
    "server_id": "string"
  },
  "woo_dbs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "database": "string",
    "host": "string",
    "password": "string",
    "port": "number",
    "redis": "string",
    "user": "string"
  },
  "covapay_order_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": "string",
    "order_id": "number",
    "session_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "store_statistics": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "timezone": "string",
    "date": "string",
    "available": "number",
    "booked": "number",
    "reserved": "number",
    "backorder": "number",
    "stockout": "number",
    "low_stock_products": "number",
    "low_stock_events": "number",
    "linked_warehouses": [
      {
        "buffer": "object"
      }
    ]
  },
  "cova_order": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "Id": "string",
    "CreatedByUserId": "number",
    "CreatedTime": "string",
    "Customer": "null",
    "Details": "null",
    "Discounts": "null",
    "InStock": [
      {
        "No": "object",
        "OriginalLineNumber": "object",
        "CatalogId": "object",
        "Name": "object",
        "SKU": "object",
        "SoldAtPrice": "object",
        "ListPrice": "object",
        "BasePriceListPrice": "object",
        "SalePrice": "object",
        "Quantity": "object",
        "UnitId": "object",
        "UnitAbbreviation": "object",
        "MeasurementType": "object",
        "PackageNumber": "object",
        "Batch": "object",
        "SerialNumbers": "object",
        "Attributes": "object",
        "LineLevelData": "object"
      }
    ],
    "Invoice": {
      "Id": "string",
      "PrintableInvoiceId": "string",
      "Annotation": "null",
      "CreatedDateUtc": "string"
    },
    "Location": {
      "Id": "number",
      "Name": "string",
      "Address": {
        "Zip": "object",
        "StateCode": "object",
        "CountryCode": "object",
        "City": "object",
        "CountryName": "object",
        "StateName": "object",
        "StreetAddressLine1": "object",
        "StreetAddressLine2": "object"
      },
      "StorePhoneNumbers": []
    },
    "LocationId": "number",
    "OrderFulfillment": "null",
    "Payments": {
      "Items": [
        "object"
      ],
      "ChangeDue": "number",
      "CashBack": "number"
    },
    "PreviousOrderVersions": [],
    "PricingScheme": "string",
    "ReceiptNumber": "string",
    "SaleOverrides": {
      "UserId": "number",
      "Authorizations": {
        "Discount": "object"
      }
    },
    "SaleTaxTotals": {},
    "Status": "string",
    "TaxCalculation": {
      "TaxCalculcationId": "null",
      "Lines": [
        "object"
      ]
    },
    "TenderedBy": "string",
    "TenderedByUserId": "number",
    "Total": {
      "Products": "number",
      "Taxes": "number"
    },
    "TotalItems": "number",
    "TotalValues": "number",
    "_created": "Date",
    "_updated": "Date",
    "created_time": "Date",
    "invoice_cost": [
      {
        "LineNumber": "object",
        "OriginalLineNumber": "object",
        "CostCollection": "object"
      }
    ]
  },
  "woocommerce_reviews": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "date_created": "string",
    "date_created_gmt": "string",
    "product_id": "number",
    "status": "string",
    "reviewer": "string",
    "reviewer_email": "string",
    "review": "string",
    "rating": "number",
    "verified": "boolean",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "up": [
        "object"
      ],
      "reviewer": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "warehouse_transfers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "transfer_id": "string",
    "from_warehouse": {
      "buffer": "Buffer/Binary"
    },
    "to_warehouse": {
      "buffer": "Buffer/Binary"
    },
    "operator_id": {
      "buffer": "Buffer/Binary"
    },
    "status": "string",
    "line_items": [
      {
        "inventory_product_id": "object",
        "quantity": "object",
        "check_in_logs": "object"
      }
    ],
    "current_user": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_brands": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "parent": "number",
    "description": "string",
    "display": "string",
    "image": "null",
    "menu_order": "number",
    "count": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "pos_mapping": {
      "id": "string"
    }
  },
  "payfirma_sales": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "input": {
      "warehouse_id": "string",
      "payment_type": "string",
      "order_data": {
        "total": "object",
        "billing": "object"
      },
      "customer_data": {
        "id": "object"
      },
      "checkout_data": {
        "bs_mr_pf_exp_date_mm": "object",
        "bs_mr_pf_exp_date_yy": "object",
        "save_card": "object",
        "card_id": "object"
      }
    },
    "sale": {
      "amount": "string",
      "postal_code": "string",
      "custom_id": "string",
      "card_type": "string",
      "card_suffix": "string",
      "id": "number",
      "transaction_id": "string",
      "transaction_success": "boolean",
      "transaction_result": "string",
      "transaction_message": "string",
      "transaction_time": "number",
      "transaction_type": "string"
    },
    "_created": "Date"
  },
  "promotion_order": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "promotion_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number"
  },
  "chatso_prices": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "type_": "string",
    "price_id": "string",
    "unit_amount": "number",
    "recurring": {
      "interval": "string",
      "interval_count": "number"
    },
    "tier": "number"
  },
  "aeropay_tracking_orders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": "string",
    "order_id": "number",
    "cart_hash": "string",
    "transaction_id": "number",
    "uid": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_inventory_quantities": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "Id": "string",
    "ProductId": "string",
    "BatchId": "string",
    "Cost": "number",
    "InStock": "number",
    "InStockQuantity": "number",
    "LocationId": "number",
    "Lot": "string",
    "OnHold": "number",
    "PackageId": "string",
    "ReceivedDate": "string",
    "RoomId": "number",
    "SerialNumber": "string",
    "TotalCostInStock": "number",
    "UnitCost": "number",
    "UnitId": "number",
    "UpdatedDateUtc": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "woocommerce_attributes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "type": "string",
    "order_by": "string",
    "has_archives": "boolean",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "attribute_terms": [
      {
        "id": "object",
        "name": "object",
        "slug": "object",
        "description": "object",
        "menu_order": "object",
        "count": "object",
        "_links": "object"
      }
    ]
  },
  "warehouse_adjustments": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "adjustment_id": "string",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "operator_id": {
      "buffer": "Buffer/Binary"
    },
    "line_items": [
      {
        "inventory_product_id": "object",
        "product_type": "object",
        "adjust_type": "object",
        "adjust_reason": "object",
        "quantity": "object",
        "description": "object"
      }
    ]
  },
  "flowhub_variant_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "brand": "string",
    "inventoryUnitOfMeasure": "string",
    "inventoryUnitOfMeasureToGramsMultiplier": "number",
    "isMixAndMatch": "boolean",
    "isSoldByWeight": "boolean",
    "parentProductId": "string",
    "priceProfileName": "string",
    "productPictureURL": "null",
    "productUnitOfMeasure": "string",
    "productUnitOfMeasureToGramsMultiplier": "number",
    "productWeight": "number",
    "upc": "null",
    "variantId": "string",
    "variantName": "string",
    "weightTierInformation": [
      {
        "gramAmount": "object",
        "name": "object",
        "postTaxPriceInPennies": "object",
        "preTaxPriceInPennies": "object",
        "pricePerUnitInMinorUnits": "object"
      }
    ],
    "variation_index": "number",
    "woo_mapping": {
      "locations": {
        "3feaa407-edd0-4344-a106-39e02696ac3f": "object"
      },
      "variable_id": "number"
    }
  },
  "export_result": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "export_type": "string",
    "parameters": {
      "limit": "number",
      "filters": {
        "order_status": "object",
        "address_line_1": "object"
      },
      "page": "number"
    },
    "running_at": "Date",
    "_created": "Date"
  },
  "user_unify_notification_settings": "empty",
  "greenline_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "string",
    "_created": "Date",
    "barcode": "string",
    "cannabisVolume": "null",
    "cannabisWeight": "number",
    "categoryId": "string",
    "categoryName": "string",
    "cbd": "null",
    "createDate": "string",
    "depositFee": "null",
    "description": "null",
    "imageUrl": "string",
    "name": "string",
    "parentCategoryId": "string",
    "parentCategoryName": "string",
    "parentProductId": "null",
    "parentProductName": "null",
    "sku": "string",
    "strainType": "null",
    "supplierId": "number",
    "supplierName": "string",
    "tags": [],
    "taxes": [
      {
        "id": "object",
        "name": "object",
        "percent": "object",
        "exemptOverride": "object"
      }
    ],
    "thc": "null",
    "updateDate": "string",
    "weight": "number",
    "wholesaleCost": "null",
    "locations": {
      "849": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "858": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "863": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "868": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "965": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "967": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1003": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1004": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1005": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1006": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1027": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1045": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1046": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1047": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1048": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1049": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1050": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1051": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1052": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1053": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1054": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1055": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1056": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1057": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1058": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1059": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1060": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1061": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1062": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1063": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1064": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1065": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1066": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1067": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1068": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1069": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1070": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1071": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1072": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1073": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1098": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1100": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1102": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1103": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1107": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1108": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1109": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1112": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1113": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1114": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1116": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1123": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1124": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1125": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1126": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1127": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1128": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1129": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1131": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "1166": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "6947": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "6954": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "6985": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7011": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7030": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7031": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7047": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7176": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7191": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7224": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      },
      "7278": {
        "metaData": "object",
        "price": "object",
        "salePrice": "object",
        "salePriceEndUtc": "object"
      }
    },
    "woo_mapping": {
      "variable_id": "number",
      "locations": {
        "849": "object",
        "858": "object",
        "863": "object",
        "868": "object",
        "1045": "object",
        "1055": "object",
        "1113": "object",
        "1124": "object",
        "1126": "object"
      }
    },
    "syncing_at": "Date",
    "adding_location_at": "Date",
    "externalSourceName": "string",
    "vendorIds": "null",
    "images": [],
    "taxConfigs": [],
    "resync_check_update_status": "string",
    "resync_check_update_at": "Date",
    "resync_update_to_woo_status": "string",
    "resync_update_to_woo_at": "Date",
    "adding_location_status": "string",
    "parent_product_sync_image_status": "string",
    "parent_product_sync_image_at": "Date"
  },
  "paramountpay_order_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number",
    "_created": "Date",
    "_updated": "Date",
    "params": {
      "merchant_id": "string",
      "merchant_sub_id": "string",
      "merchant_user_id": "string",
      "merchant_txn_num": "string",
      "txn_amount": "number",
      "txn_currency": "string",
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "merchant_customer_email": "string",
      "return_url": "string",
      "extra_field_1": "string"
    }
  },
  "greenline_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "type": "string",
    "data": {
      "company": {
        "id": "object"
      },
      "location": {
        "id": "object"
      },
      "paymentQueue": {
        "id": "object",
        "createDate": "object",
        "customerId": "object",
        "customerName": "object",
        "notes": "object",
        "status": "object",
        "orderType": "object",
        "totalDiscrepancy": "object",
        "paymentLinesTotalDiscrepancy": "object",
        "paymentLines": "object"
      }
    },
    "time": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "shopify_locations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "activatable": "boolean",
    "address": {
      "address1": "string",
      "address2": "null",
      "city": "string",
      "country": "string",
      "countryCode": "string",
      "formatted": [
        "object"
      ],
      "latitude": "null",
      "longitude": "null",
      "phone": "string",
      "province": "string",
      "provinceCode": "string",
      "zip": "string"
    },
    "addressVerified": "boolean",
    "deactivatable": "boolean",
    "deactivatedAt": "null",
    "deletable": "boolean",
    "fulfillmentService": "null",
    "fulfillsOnlineOrders": "boolean",
    "hasActiveInventory": "boolean",
    "hasUnfulfilledOrders": "boolean",
    "id": "string",
    "isActive": "boolean",
    "legacyResourceId": "string",
    "name": "string",
    "shipsInventory": "boolean",
    "suggestedAddresses": [],
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_update": "Date"
  },
  "payfirma_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "merchant_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "woo_id": "number",
    "_created": "Date",
    "_updated": "Date",
    "card_lookup_id": "string",
    "customer_lookup_id": "string",
    "email": "string",
    "postal_code": "string"
  },
  "locks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "key": {
      "buffer": "Buffer/Binary"
    },
    "type": "number",
    "_created": "Date",
    "_updated": "Date",
    "value": "number"
  },
  "blazepay_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "type": "string",
    "id": "string",
    "attributes": {
      "merchantId": "string",
      "providerId": "string",
      "order": {
        "id": "object",
        "totalPaidAmount": "object",
        "totalRefundedAmount": "object"
      },
      "resource": {
        "resourceType": "object",
        "type": "object",
        "paymentMethodType": "object",
        "currency": "object",
        "requestedAmount": "object",
        "chargedAmount": "object",
        "status": "object",
        "statusReason": "object",
        "originalPaymentId": "object",
        "deferCapture": "object",
        "employeeId": "object",
        "customerIp": "object",
        "terminalId": "object",
        "tipAmount": "object",
        "callbackUrl": "object",
        "cardMaskedPan": "object",
        "cardBrand": "object",
        "paylinkUrl": "object",
        "fees": "object",
        "providerInfo": "object",
        "auditable": "object"
      },
      "event": "string"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "getcake_affiliate_db": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "affiliate_id": "number",
    "affiliate_link": "string",
    "coupon": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "cloverpay_transaction_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "amount": "number",
    "payment_method_details": "string",
    "amount_refunded": "number",
    "currency": "string",
    "created": "number",
    "captured": "boolean",
    "ref_num": "string",
    "auth_code": "string",
    "warning_message": "string",
    "outcome": {
      "network_status": "string",
      "type": "string"
    },
    "paid": "boolean",
    "status": "string",
    "source": {
      "id": "string",
      "address_line1_check": "string",
      "address_zip": "string",
      "address_zip_check": "string",
      "brand": "string",
      "exp_month": "string",
      "exp_year": "string",
      "first6": "string",
      "last4": "string"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_order_temp": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "Location": {
      "Id": "number",
      "Name": "string",
      "Address": {
        "Zip": "object",
        "StateCode": "object",
        "CountryCode": "object",
        "City": "object",
        "CountryName": "object",
        "StateName": "object",
        "StreetAddressLine1": "object",
        "StreetAddressLine2": "object"
      },
      "StorePhoneNumbers": []
    },
    "Status": "string",
    "Details": "null",
    "CreatedTime": "string",
    "TenderedByUserId": "string",
    "TenderedBy": "string",
    "Customer": "null",
    "ReceiptNumber": "string",
    "InStock": [
      {
        "No": "object",
        "OriginalLineNumber": "object",
        "CatalogId": "object",
        "Name": "object",
        "SKU": "object",
        "SoldAtPrice": "object",
        "ListPrice": "object",
        "BasePriceListPrice": "object",
        "SalePrice": "object",
        "Quantity": "object",
        "UnitId": "object",
        "UnitAbbreviation": "object",
        "MeasurementType": "object",
        "PackageNumber": "object",
        "Batch": "object",
        "SerialNumbers": "object",
        "Attributes": "object",
        "LineLevelData": "object"
      }
    ],
    "TaxCalculation": {
      "TaxCalculcationId": "null",
      "Lines": [
        "object"
      ]
    },
    "Payments": {
      "Items": [
        "object"
      ],
      "ChangeDue": "number",
      "CashBack": "number"
    },
    "Discounts": "null",
    "Invoice": "null",
    "Total": {
      "Products": "number",
      "Taxes": "number"
    },
    "SaleOverrides": "null",
    "OrderFulfillment": {
      "Source": "string",
      "Method": "string",
      "Reference": "string",
      "OrderNumber": "null",
      "Status": "string",
      "TrackingNumber": "string",
      "OrderVersion": "string"
    },
    "PreviousOrderVersions": [],
    "CompanyId": "number",
    "LocationId": "number",
    "RunId": "number"
  },
  "cache_home_report": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "data": {
      "rows": [
        "object"
      ]
    },
    "end_date": "Date",
    "start_date": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_completed_order_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "customer": [
        "object"
      ]
    },
    "_updated": "Date",
    "billing": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "postcode": "string",
      "country": "string",
      "email": "string",
      "phone": "string"
    },
    "cart_hash": "string",
    "cart_tax": "string",
    "coupon_lines": [],
    "created_via": "string",
    "currency": "string",
    "currency_symbol": "string",
    "customer_id": "number",
    "customer_ip_address": "string",
    "customer_note": "string",
    "customer_user_agent": "string",
    "date_completed": "string",
    "date_completed_from_str": "Date",
    "date_completed_gmt": "string",
    "date_completed_gmt_from_str": "Date",
    "date_created": "string",
    "date_created_from_str": "Date",
    "date_created_gmt": "string",
    "date_created_gmt_from_str": "Date",
    "date_modified": "string",
    "date_modified_from_str": "Date",
    "date_modified_gmt": "string",
    "date_modified_gmt_from_str": "Date",
    "date_paid": "string",
    "date_paid_from_str": "Date",
    "date_paid_gmt": "string",
    "date_paid_gmt_from_str": "Date",
    "discount_tax": "string",
    "discount_total": "string",
    "fee_lines": [],
    "line_items": [
      {
        "id": "object",
        "name": "object",
        "product_id": "object",
        "variation_id": "object",
        "quantity": "object",
        "tax_class": "object",
        "subtotal": "object",
        "subtotal_tax": "object",
        "total": "object",
        "total_tax": "object",
        "taxes": "object",
        "meta_data": "object",
        "sku": "object",
        "price": "object",
        "cog_item_cost": "object",
        "cog_item_total_cost": "object",
        "composite_parent": "object",
        "composite_children": "object",
        "bs_price_discount": "object",
        "bs_inventory_id": "object",
        "bs_inventory_cost": "object"
      }
    ],
    "meta_data": [
      {
        "id": "object",
        "key": "object",
        "value": "object"
      }
    ],
    "number": "string",
    "order_key": "string",
    "parent_id": "number",
    "payment_method": "string",
    "payment_method_title": "string",
    "post_process_queue_count": "number",
    "prices_include_tax": "boolean",
    "refunds": [],
    "shipping": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "postcode": "string",
      "country": "string"
    },
    "shipping_lines": [
      {
        "id": "object",
        "method_title": "object",
        "method_id": "object",
        "instance_id": "object",
        "total": "object",
        "total_tax": "object",
        "taxes": "object",
        "meta_data": "object"
      }
    ],
    "shipping_tax": "string",
    "shipping_total": "string",
    "status": "string",
    "tax_lines": [
      {
        "id": "object",
        "rate_code": "object",
        "rate_id": "object",
        "label": "object",
        "compound": "object",
        "tax_total": "object",
        "shipping_tax_total": "object",
        "rate_percent": "object",
        "meta_data": "object"
      }
    ],
    "total": "string",
    "total_items": "number",
    "total_tax": "string",
    "total_value": "number",
    "transaction_id": "string",
    "version": "string",
    "post_process_queue": [],
    "inventory_id_of_line_items": {
      "7673_34844_0": {
        "bs_price_discount": "object",
        "sku": "object",
        "inventory_id": "object",
        "inventory_cost": "object"
      }
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "cantec_delivery_distance": "number",
    "service_fee": "number",
    "categories": [
      "number"
    ],
    "picking_status": "string",
    "notify_driver": "boolean",
    "driver_picked": "boolean",
    "_new": "boolean"
  },
  "woocommerce_product": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "date_created": "string",
    "date_created_gmt": "string",
    "date_modified": "string",
    "date_modified_gmt": "string",
    "description": "string",
    "permalink": "string",
    "sku": "string",
    "price": "string",
    "regular_price": "string",
    "sale_price": "string",
    "date_on_sale_from": "null",
    "date_on_sale_from_gmt": "null",
    "date_on_sale_to": "null",
    "date_on_sale_to_gmt": "null",
    "on_sale": "boolean",
    "status": "string",
    "purchasable": "boolean",
    "virtual": "boolean",
    "downloadable": "boolean",
    "downloads": [],
    "download_limit": "number",
    "download_expiry": "number",
    "tax_status": "string",
    "tax_class": "string",
    "manage_stock": "boolean",
    "stock_quantity": "null",
    "stock_status": "string",
    "backorders": "string",
    "backorders_allowed": "boolean",
    "backordered": "boolean",
    "weight": "string",
    "dimensions": {
      "length": "string",
      "width": "string",
      "height": "string"
    },
    "shipping_class": "string",
    "shipping_class_id": "number",
    "image": {
      "id": "number",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "src": "string",
      "name": "string",
      "alt": "string"
    },
    "attributes": [
      {
        "id": "object",
        "name": "object",
        "option": "object"
      }
    ],
    "menu_order": "number",
    "meta_data": [
      {
        "id": "object",
        "key": "object",
        "value": "object"
      }
    ],
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "up": [
        "object"
      ]
    },
    "type": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    },
    "id_str": "string"
  },
  "shopify_orders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "billingAddress": "null",
    "billingAddressMatchesShippingAddress": "boolean",
    "canMarkAsPaid": "boolean",
    "canNotifyCustomer": "boolean",
    "cancelReason": "null",
    "cancelledAt": "null",
    "capturable": "boolean",
    "cartDiscountAmountSet": "null",
    "channelInformation": "null",
    "clientIp": "string",
    "closed": "boolean",
    "closedAt": "null",
    "confirmed": "boolean",
    "createdAt": "string",
    "currencyCode": "string",
    "currentCartDiscountAmountSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "currentSubtotalLineItemsQuantity": "number",
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "currentTaxLines": [],
    "currentTotalDiscountsSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "currentTotalDutiesSet": "null",
    "currentTotalPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "currentTotalWeight": "string",
    "customAttributes": [],
    "customer": "null",
    "customerAcceptsMarketing": "boolean",
    "customerJourneySummary": {
      "customerOrderIndex": "number",
      "daysToConversion": "null",
      "firstVisit": "null",
      "lastVisit": "null",
      "momentsCount": "number",
      "ready": "boolean"
    },
    "customerLocale": "string",
    "discountCode": "null",
    "discountCodes": [],
    "displayAddress": "null",
    "displayFinancialStatus": "string",
    "displayFulfillmentStatus": "string",
    "disputes": [],
    "edited": "boolean",
    "email": "null",
    "estimatedTaxes": "boolean",
    "fulfillable": "boolean",
    "fulfillments": [],
    "fullyPaid": "boolean",
    "hasTimelineComment": "boolean",
    "id": "string",
    "legacyResourceId": "string",
    "merchantEditable": "boolean",
    "merchantEditableErrors": [],
    "name": "string",
    "netPaymentSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "note": "null",
    "originalTotalDutiesSet": "null",
    "originalTotalPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "paymentCollectionDetails": {
      "additionalPaymentCollectionUrl": "string"
    },
    "paymentGatewayNames": [
      "string"
    ],
    "phone": "null",
    "physicalLocation": {
      "id": "string"
    },
    "presentmentCurrencyCode": "string",
    "processedAt": "string",
    "publication": "null",
    "refundDiscrepancySet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "refundable": "boolean",
    "refunds": [],
    "registeredSourceUrl": "null",
    "requiresShipping": "boolean",
    "restockable": "boolean",
    "riskLevel": "string",
    "shippingAddress": "null",
    "shippingLine": "null",
    "sourceIdentifier": "string",
    "subtotalLineItemsQuantity": "number",
    "subtotalPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "tags": [
      "string"
    ],
    "taxLines": [],
    "taxesIncluded": "boolean",
    "test": "boolean",
    "totalCapturableSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalOutstandingSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalReceivedSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalRefundedSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalRefundedShippingSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalShippingPriceSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalTaxSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalTipReceivedSet": {
      "presentmentMoney": {
        "amount": "object",
        "currencyCode": "object"
      },
      "shopMoney": {
        "amount": "object",
        "currencyCode": "object"
      }
    },
    "totalWeight": "string",
    "unpaid": "boolean",
    "updatedAt": "string",
    "discountApplications": [],
    "lineItems": [
      {
        "__typename": "object",
        "currentQuantity": "object",
        "customAttributes": "object",
        "discountAllocations": "object",
        "discountedTotalSet": "object",
        "discountedUnitPriceSet": "object",
        "duties": "object",
        "id": "object",
        "image": "object",
        "merchantEditable": "object",
        "name": "object",
        "nonFulfillableQuantity": "object",
        "originalTotalSet": "object",
        "originalUnitPriceSet": "object",
        "product": "object",
        "quantity": "object",
        "refundableQuantity": "object",
        "requiresShipping": "object",
        "restockable": "object",
        "sellingPlan": "object",
        "sku": "object",
        "taxLines": "object",
        "taxable": "object",
        "title": "object",
        "totalDiscountSet": "object",
        "unfulfilledDiscountedTotalSet": "object",
        "unfulfilledOriginalTotalSet": "object",
        "unfulfilledQuantity": "object",
        "variant": "object",
        "variantTitle": "object",
        "vendor": "object"
      }
    ],
    "shippingLines": [],
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "moneris_3ds_challenge": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "input": {
      "warehouse_id": "string",
      "payment_type": "string",
      "order_data": {
        "id": "object",
        "total": "object",
        "billing": "object"
      },
      "customer_data": {
        "id": "object"
      },
      "checkout_data": {
        "bs_mr_pf_exp_date_mm": "object",
        "bs_mr_pf_exp_date_yy": "object",
        "bs_mr_pf_postal_code": "object",
        "bs_mr_pf_cardholder_name": "object",
        "save_card": "object",
        "card_id": "object",
        "shipping_method": "object",
        "shipping_first_name": "object",
        "shipping_last_name": "object",
        "card_suffix": "object"
      },
      "callback_url_when_success": "string",
      "callback_url_when_fail": "string",
      "browser_language": "string",
      "browser_screen_height": "number",
      "browser_screen_width": "number",
      "browser_useragent": "string",
      "browser_ip": "string"
    },
    "charge_payload": {
      "test_mode": "boolean",
      "store_id": "string",
      "api_token": "string",
      "crypt_type": "string",
      "order_id": "string",
      "cust_id": "string",
      "amount": "string",
      "type": "string",
      "pan": "string",
      "expiry_date": "string",
      "avs_street_number": "string",
      "avs_street_name": "string",
      "avs_zipcode": "string",
      "cvd_value": "string",
      "save_card": "boolean"
    },
    "three_ds_payload": {
      "type": "string",
      "test_mode": "boolean",
      "store_id": "string",
      "api_token": "string",
      "crypt_type": "string",
      "message_category": "string",
      "device_channel": "string",
      "order_id": "string",
      "cardholder_name": "string",
      "pan": "string",
      "expdate": "string",
      "amount": "string",
      "request_type": "string",
      "notification_url": "string",
      "challenge_windowsize": "string",
      "browser_java_enabled": "string",
      "browser_screen_height": "string",
      "browser_screen_width": "string",
      "browser_language": "string",
      "browser_ip": "string",
      "browser_useragent": "string",
      "bill_postal_code": "string",
      "request_challenge": "string"
    },
    "threeds_result": {
      "ok": "boolean",
      "ResponseCode": "string",
      "ReceiptId": "string",
      "Message": "string",
      "MessageType": "string",
      "TransStatus": "string",
      "TransStatusReason": "string",
      "ChallengeURL": "string",
      "ChallengeData": "string",
      "ThreeDSServerTransId": "string",
      "ThreeDSVersion": "string",
      "ThreeDSDSTransID": "string",
      "ThreeDSAcsTransID": "string",
      "ThreeDSAuthTimeStamp": "string",
      "AuthenticationType": "string",
      "CardholderInfo": "string",
      "Cavv": "null",
      "ECI": "null"
    },
    "_created": "Date"
  },
  "stickycard_coupons": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "discount_id": "string",
    "email": "string",
    "phone": "string",
    "_created": "Date",
    "_updated": "Date",
    "coupon": {
      "id": "number",
      "code": "string",
      "amount": "string",
      "status": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "discount_type": "string",
      "description": "string",
      "date_expires": "null",
      "date_expires_gmt": "null",
      "usage_count": "number",
      "individual_use": "boolean",
      "product_ids": [],
      "excluded_product_ids": [],
      "usage_limit": "number",
      "usage_limit_per_user": "null",
      "limit_usage_to_x_items": "null",
      "free_shipping": "boolean",
      "product_categories": [],
      "excluded_product_categories": [],
      "exclude_sale_items": "boolean",
      "minimum_amount": "string",
      "maximum_amount": "string",
      "email_restrictions": [],
      "used_by": [],
      "meta_data": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    }
  },
  "greenline_statistic_inventory_quantity_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "company_id": "number",
    "location_id": "number",
    "product_id": "string",
    "quantity": "number"
  },
  "statistic_budtender_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "id": "string",
    "location_id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number_of_orders": "number",
    "revenue": "number"
  },
  "data_team": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "stores": [
      "string"
    ],
    "emails": [
      "string"
    ]
  },
  "image_failed_sync_monitorings": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number_of_failed_image_sync": "number",
    "store_name": "string",
    "tracking_date": "Date"
  },
  "cova_ab_catalog": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "product_upc": "number",
    "csv_imported": "boolean",
    "product_attributes": "null",
    "product_brand": "string",
    "product_disclaimer": "string",
    "product_image": "string",
    "product_long_description": "string",
    "product_short_description": "string",
    "product_sku": "string",
    "product_title": "string",
    "product_url": "null",
    "updated_at_utc": "Date"
  },
  "lightspeed_webhook": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "domain_prefix": "string",
    "payload": {
      "balance": "string",
      "company_name": "null",
      "contact": {
        "company_name": "object",
        "email": "object",
        "fax": "object",
        "first_name": "object",
        "last_name": "object",
        "mobile": "object",
        "phone": "object",
        "physical_address1": "object",
        "physical_address2": "object",
        "physical_city": "object",
        "physical_country_id": "object",
        "physical_postcode": "object",
        "physical_state": "object",
        "physical_suburb": "object",
        "postal_address1": "object",
        "postal_address2": "object",
        "postal_city": "object",
        "postal_country_id": "object",
        "postal_postcode": "object",
        "postal_state": "object",
        "postal_suburb": "object",
        "twitter": "object",
        "website": "object"
      },
      "contact_first_name": "string",
      "contact_last_name": "string",
      "created_at": "string",
      "custom_field_1": "null",
      "custom_field_2": "null",
      "custom_field_3": "null",
      "custom_field_4": "null",
      "customer_code": "string",
      "customer_group_id": "string",
      "date_of_birth": "null",
      "deleted_at": "null",
      "do_not_email": "boolean",
      "email": "string",
      "enable_loyalty": "boolean",
      "fax": "null",
      "first_name": "string",
      "id": "string",
      "last_name": "string",
      "loyalty_balance": "string",
      "mobile": "null",
      "note": "null",
      "on_account_limit": "null",
      "phone": "string",
      "retailer_id": "string",
      "sex": "null",
      "updated_at": "string",
      "version": "number",
      "year_to_date": "string"
    },
    "retailer_id": "string",
    "type": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_catalog_temp": "empty",
  "woocommerce_product_keys": {
    "_id": "string",
    "value": "null"
  },
  "inventory_schedule_validate": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "data": [
      {
        "store_id": "object",
        "store_name": "object",
        "push_to_crm": "object",
        "products": "object",
        "orders": "object",
        "inventories": "object"
      }
    ]
  },
  "shopify_discount_codes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "__typename": "string",
    "appliesOncePerCustomer": "boolean",
    "asyncUsageCount": "number",
    "codeCount": "number",
    "createdAt": "string",
    "customerSelection": {
      "__typename": "string",
      "allCustomers": "boolean"
    },
    "endsAt": "string",
    "hasTimelineComment": "boolean",
    "shareableUrls": [
      {
        "targetItemImage": "object",
        "targetType": "object",
        "title": "object",
        "url": "object"
      }
    ],
    "startsAt": "string",
    "status": "string",
    "summary": "string",
    "title": "string",
    "totalSales": "null",
    "usageLimit": "null",
    "usesPerOrderLimit": "number",
    "customerBuys": {
      "items": {
        "__typename": "object"
      },
      "value": {
        "__typename": "object",
        "quantity": "object"
      }
    },
    "customerGets": {
      "appliesOnOneTimePurchase": "boolean",
      "appliesOnSubscription": "boolean",
      "items": {
        "__typename": "object"
      },
      "value": {
        "__typename": "object",
        "effect": "object",
        "quantity": "object"
      }
    },
    "id": "string",
    "codes": [
      {
        "asyncUsageCount": "object",
        "code": "object",
        "createdBy": "object",
        "id": "object"
      }
    ],
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "time_slots": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "string",
    "order_limit": "null",
    "time_slots": [
      {
        "from": "object",
        "to": "object",
        "order": "object"
      }
    ],
    "created_at": "Date"
  },
  "canfleet_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "created_at": "string",
    "api_version": "string",
    "event": "string",
    "data": {
      "expected_delivery_before": "string",
      "pickup_hub_id": "string",
      "pickup": {
        "name": "object",
        "phone": "object",
        "address_1": "object",
        "address_2": "object",
        "city": "object",
        "state": "object",
        "country": "object",
        "postcode": "object",
        "lng": "object",
        "lat": "object"
      },
      "delivery": {
        "name": "object",
        "phone": "object",
        "address_1": "object",
        "address_2": "object",
        "city": "object",
        "state": "object",
        "country": "object",
        "postcode": "object",
        "lng": "object",
        "lat": "object"
      },
      "barcode": "string",
      "note": "string",
      "requirements": {
        "photos": "object",
        "signature": "object"
      },
      "delivery_index": "null",
      "pickup_index": "null",
      "return_index": "null",
      "skip_pickup": "boolean",
      "contactless_delivery": "boolean",
      "metadata": {
        "bs_order_id": "object"
      },
      "executor_type": "string",
      "executor_id": "string",
      "executor_org_id": "string",
      "assigned_at": "string",
      "assigned_by": "string",
      "created_org_id": "string",
      "merchant_org_id": "string",
      "number": "number",
      "name": "string",
      "tracking_url": "string",
      "created_at": "string",
      "created_by": "string",
      "updated_at": "string",
      "status": "string",
      "distance": "number",
      "duration": "number",
      "is_alerted": "boolean",
      "clean_pickup_hub_id": "boolean",
      "id": "string"
    },
    "id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "product_sales_history": "empty",
  "moneris_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "moneris_store_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "woo_id": "number",
    "_created": "Date",
    "_updated": "Date",
    "card_expiry_month": "number",
    "card_expiry_year": "number",
    "card_prefix": "string",
    "card_suffix": "string",
    "data_key": "string",
    "issuer_id": "string"
  },
  "statistic_coupon_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "coupon_code": "string",
    "date": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "discount": "number",
    "revenue": "number",
    "used": "number"
  },
  "springbig_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "phone": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "coupon": "null",
    "email": "string",
    "springbig_data": {
      "id": "number",
      "pos_type": "null",
      "pos_user": "string",
      "email": "string",
      "first_name": "string",
      "last_name": "string",
      "gender": "string",
      "address1": "string",
      "address2": "string",
      "city": "string",
      "region": "null",
      "zip": "string",
      "birthday": "string",
      "allowed_sms": "null",
      "sms_opt_in_date": "null",
      "allowed_email": "null",
      "email_opt_in_date": "null",
      "allowed_loyalty": "boolean",
      "hipaa_acknowledged": "boolean",
      "hipaa_acknowledged_date": "string",
      "has_signature": "boolean",
      "merchant_id": "number",
      "created_at": "string",
      "balance": "number",
      "has_budz": "boolean",
      "active_subscriber": "boolean",
      "interests": [
        "object"
      ],
      "locations": [
        "object"
      ],
      "discounts": [
        "object"
      ],
      "custom_groups": [
        "object"
      ],
      "phone_number": "string",
      "wallet_link": "string",
      "referral_link": "string",
      "primary_location": "null",
      "medical": "null",
      "medical_card_expiration": "string",
      "recreational": "boolean",
      "out_of_state_recreational": "null",
      "member_profiles": [
        "object"
      ],
      "current_milestone_tiers": {
        "spend": "object",
        "visit": "object",
        "point": "object"
      }
    },
    "verification_code": "number"
  },
  "cova_package_details": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "PackageId": "string",
    "BatchId": "null",
    "Cannabinoids": [],
    "CreatedDateUtc": "string",
    "ExpiryDate": "null",
    "HarvestDate": "null",
    "PackagedDate": "null",
    "ProductionDate": "null",
    "ProductsAssociatedWith": [
      "string"
    ],
    "ReceivingDate": "string",
    "ReceivingId": "string",
    "Strain": "null",
    "SupplierId": "number",
    "SupplierLicense": "null",
    "SupplierName": "string",
    "TerpeneProfile": "null",
    "TestBatchNumber": "null",
    "TestDate": "null",
    "TestingFacilityName": "null",
    "UpdatedDateUtc": "string",
    "UseByDate": "null",
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_promotion": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "DiscountId": "string",
    "Audit": {
      "Created": {
        "On": "object",
        "By": "object"
      },
      "Activated": {
        "On": "object",
        "By": "object"
      },
      "Deactivated": "null"
    },
    "Condition": {
      "MatchAll": {
        "Products": "object"
      }
    },
    "Id": "string",
    "Name": "string",
    "Period": {
      "DateRanges": [
        "object"
      ],
      "Tag": "string"
    },
    "Rule": {
      "Tag": "string",
      "Discount": {
        "Dollar": "object",
        "Tag": "object"
      }
    },
    "SelectedParentEntities": [
      "number"
    ],
    "Status": "string"
  },
  "greenline_webhook_monitorings": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "calculate_date": "string",
    "_created": "string",
    "_updated": "string",
    "total_webhooks": "number",
    "total_delay_minutes": "number",
    "last_checked_id": "string",
    "00:00 - 00:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "00:30 - 01:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "01:00 - 01:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "01:30 - 02:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "02:00 - 02:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "02:30 - 03:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "03:00 - 03:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "03:30 - 04:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "04:00 - 04:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "04:30 - 05:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "05:00 - 05:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "05:30 - 06:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "06:00 - 06:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "06:30 - 07:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "07:00 - 07:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "07:30 - 08:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "08:00 - 08:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "08:30 - 09:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "09:00 - 09:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "09:30 - 10:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "10:00 - 10:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "10:30 - 11:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "11:00 - 11:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "11:30 - 12:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "12:00 - 12:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "12:30 - 13:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "13:00 - 13:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "13:30 - 14:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "14:00 - 14:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "14:30 - 15:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "15:00 - 15:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "15:30 - 16:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "16:00 - 16:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "16:30 - 17:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "17:00 - 17:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "17:30 - 18:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "18:00 - 18:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "18:30 - 19:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "19:00 - 19:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "19:30 - 20:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "20:00 - 20:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "20:30 - 21:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "21:00 - 21:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "21:30 - 22:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "22:00 - 22:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "22:30 - 23:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "23:00 - 23:30": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    },
    "23:30 - 24:00": {
      "< 5 min": "number",
      "5 - 10 min": "number",
      "10 - 30 min": "number",
      "30 - 60 min": "number",
      "60 - 180 min": "number",
      "> 180 min": "number"
    }
  },
  "woocommerce_categories": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "parent": "number",
    "description": "string",
    "display": "string",
    "image": "null",
    "menu_order": "number",
    "count": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_shipping_zones": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "order": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "describedby": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "locations": [],
    "shipping_methods": []
  },
  "flowhub_parent_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "brand": "string",
    "category": "string",
    "customCategoryName": "string",
    "effects": [],
    "parentProductId": "string",
    "parentProductName": "string",
    "productDescription": "string",
    "speciesName": "string",
    "tags": [],
    "type": "string",
    "weedmapsBrandId": "null",
    "weedmapsId": "null",
    "syncing_at": "Date",
    "woo_mapping": {
      "variable_id": "number"
    }
  },
  "lightspeed_parent_product": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "account_code_purchase": "null",
    "account_code_sales": "null",
    "attributes": {},
    "brand_id": "null",
    "classification": "string",
    "composite_bom": {},
    "created_at": "string",
    "deleted_at": "null",
    "description": "string",
    "images": [],
    "is_active": "boolean",
    "name": "string",
    "price_outlet": {
      "tax_exclusive": "string",
      "loyalty_amount": "null",
      "outlets": [
        "object"
      ]
    },
    "price_standard": "null",
    "product_codes": [],
    "product_type_id": "null",
    "sku_number": "string",
    "suppliers": [],
    "tag_ids": [],
    "tracks_inventory": "boolean",
    "updated_at": "string",
    "variants": [],
    "version": "number",
    "adding_location_status": "string",
    "adding_location_at": "Date",
    "woo_mapping": {
      "variable_id": "number"
    }
  },
  "lightspeed_tag": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "name": "string",
    "deleted_at": "null",
    "version": "number",
    "_created": "Date",
    "_updated": "Date",
    "company_id": "string",
    "woo_mapping": {
      "id": "number"
    },
    "sync_status": "string"
  },
  "stripe_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "object": "string",
    "api_version": "string",
    "created": "number",
    "data": {
      "object": {
        "id": "object",
        "object": "object",
        "application": "object",
        "application_fee_percent": "object",
        "automatic_tax": "object",
        "billing_cycle_anchor": "object",
        "billing_thresholds": "object",
        "cancel_at": "object",
        "cancel_at_period_end": "object",
        "canceled_at": "object",
        "collection_method": "object",
        "created": "object",
        "current_period_end": "object",
        "current_period_start": "object",
        "customer": "object",
        "days_until_due": "object",
        "default_payment_method": "object",
        "default_source": "object",
        "default_tax_rates": "object",
        "description": "object",
        "discount": "object",
        "ended_at": "object",
        "items": "object",
        "latest_invoice": "object",
        "livemode": "object",
        "metadata": "object",
        "next_pending_invoice_item_invoice": "object",
        "pause_collection": "object",
        "payment_settings": "object",
        "pending_invoice_item_interval": "object",
        "pending_setup_intent": "object",
        "pending_update": "object",
        "plan": "object",
        "quantity": "object",
        "schedule": "object",
        "start_date": "object",
        "status": "object",
        "test_clock": "object",
        "transfer_data": "object",
        "trial_end": "object",
        "trial_start": "object"
      }
    },
    "livemode": "boolean",
    "pending_webhooks": "number",
    "request": {
      "id": "string",
      "idempotency_key": "string"
    },
    "type": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "statistic_inventory_received_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "inventory_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "received": "number"
  },
  "promotion_coupon": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "cart_id": "string",
    "coupon_id": "number",
    "coupon_code": "string",
    "coupon": {
      "id": "number",
      "code": "string",
      "amount": "string",
      "status": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "discount_type": "string",
      "description": "string",
      "date_expires": "string",
      "date_expires_gmt": "string",
      "usage_count": "number",
      "individual_use": "boolean",
      "product_ids": [
        "object"
      ],
      "excluded_product_ids": [],
      "usage_limit": "number",
      "usage_limit_per_user": "null",
      "limit_usage_to_x_items": "null",
      "free_shipping": "boolean",
      "product_categories": [],
      "excluded_product_categories": [],
      "exclude_sale_items": "boolean",
      "minimum_amount": "string",
      "maximum_amount": "string",
      "email_restrictions": [],
      "used_by": [],
      "meta_data": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    },
    "promotion_id": {
      "buffer": "Buffer/Binary"
    },
    "used": "boolean"
  },
  "stickycard_redeem_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "name": "string",
    "points": "number",
    "type": "string",
    "value": "number",
    "maxDiscount": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "drivers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "email_address": "string",
    "profile_verified": "boolean",
    "firebase_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "driver_id": {
      "buffer": "Buffer/Binary"
    },
    "address_1": "string",
    "city": "string",
    "country": "string",
    "date_of_birth": "string",
    "driver_onboarded": "boolean",
    "driver_online": "boolean",
    "eligibility_to_work_in_canada": "boolean",
    "first_name": "string",
    "invite_code": "string",
    "last_name": "string",
    "mobile_number": "string",
    "postal_code": "string",
    "profile_rejected": "boolean",
    "sin_number": "string",
    "state": "string",
    "vehicles": [
      {
        "make": "object",
        "model": "object",
        "year": "object",
        "colour": "object",
        "license_plate": "object",
        "license_plate_country": "object",
        "status": "object"
      }
    ],
    "fcm_tokens": [
      "string"
    ]
  },
  "product_resync_state_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "count_done": "number",
    "count_running": "number",
    "count_updated": "number",
    "count_ignored": "number",
    "tracking_date": "Date"
  },
  "tony_test": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "brand": "string",
    "cannabinoidInformation": [
      {
        "lowerRange": "object",
        "name": "object",
        "unitOfMeasure": "object",
        "unitOfMeasureToGramsMultiplier": "object",
        "upperRange": "object"
      }
    ],
    "category": "string",
    "clientId": "string",
    "costInMinorUnits": "number",
    "createdAt": "string",
    "currencyCode": "string",
    "customCategoryName": "null",
    "effects": [],
    "erpId": "null",
    "erpName": "null",
    "expirationDate": "null",
    "forSale": "boolean",
    "inventoryUnitOfMeasure": "string",
    "inventoryUnitOfMeasureToGramsMultiplier": "number",
    "invoiceNumber": "null",
    "isMixAndMatch": "boolean",
    "isSoldByWeight": "boolean",
    "isStackable": "boolean",
    "locationId": "string",
    "locationName": "string",
    "manifestId": "null",
    "nutrients": "null",
    "parentProductId": "string",
    "parentProductName": "string",
    "postTaxPriceInPennies": "number",
    "preTaxPriceInPennies": "number",
    "priceInMinorUnits": "number",
    "priceProfileName": "string",
    "productDescription": "string",
    "productId": "string",
    "productName": "string",
    "productPictureURL": "null",
    "productUnitOfMeasure": "string",
    "productUnitOfMeasureToGramsMultiplier": "number",
    "productUpdatedAt": "string",
    "productWeight": "null",
    "purchaseCategory": "string",
    "quantity": "number",
    "regulatoryId": "string",
    "roomId": "string",
    "roomName": "string",
    "sku": "string",
    "speciesName": "null",
    "supplierLicense": "string",
    "supplierName": "string",
    "tags": [],
    "terpenes": "null",
    "type": "string",
    "upc": "null",
    "variantId": "string",
    "variantName": "string",
    "weedmapsBrandId": "null",
    "weedmapsId": "null",
    "weightTierInformation": [
      {
        "gramAmount": "object",
        "name": "object",
        "postTaxPriceInPennies": "object",
        "preTaxPriceInPennies": "object",
        "pricePerUnitInMinorUnits": "object"
      }
    ]
  },
  "warehouses": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "phone_number": "string",
    "address_1": "string",
    "address_2": "string",
    "country": "string",
    "state": "string",
    "city": "string",
    "postal_code": "string",
    "max_range": "number",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "local_delivery": "boolean",
    "latitude": "number",
    "local_pickup": "boolean",
    "longitude": "number",
    "regular_shipping": "boolean",
    "return_address": "null",
    "return_address_option": "string",
    "waybill_address": {
      "name": "string",
      "phone_number": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "country": "string",
      "postal_code": "string"
    },
    "waybill_address_option": "string",
    "area_type": "string",
    "of_delivery": "boolean",
    "cova_name": "string",
    "threshold_by_categories": {},
    "slug": "string",
    "curbside_pickup_hours": {
      "pickup_window": "number",
      "next_available_time": "number",
      "pickup_hours": {
        "monday": "object",
        "tuesday": "object",
        "wednesday": "object",
        "thursday": "object",
        "friday": "object",
        "saturday": "object",
        "sunday": "object"
      },
      "special_hours": []
    },
    "delivery": {
      "delivery_hours": {
        "monday": "object",
        "tuesday": "object",
        "wednesday": "object",
        "thursday": "object",
        "friday": "object",
        "saturday": "object",
        "sunday": "object"
      },
      "delivery_window": "number",
      "next_available_time": "number",
      "special_hours": [
        "object"
      ]
    },
    "instore_pickup": {
      "pickup_window": "number",
      "next_available_time": "number",
      "pickup_hours": {
        "monday": "object",
        "tuesday": "object",
        "wednesday": "object",
        "thursday": "object",
        "friday": "object",
        "saturday": "object",
        "sunday": "object"
      },
      "special_hours": [
        "object"
      ]
    },
    "canfleet_delivery": "boolean",
    "limit_all_slot": "number",
    "delivery_v2": {
      "delivery_hours": {
        "monday": "object",
        "tuesday": "object",
        "wednesday": "object",
        "thursday": "object",
        "friday": "object",
        "saturday": "object",
        "sunday": "object"
      },
      "delivery_window": "number",
      "next_available_time": "number",
      "special_hours": [
        "object"
      ]
    },
    "time_slot_updated_at": "Date",
    "limit_type": "string",
    "special_time_slot_updated_at": "Date",
    "timezone": "string",
    "enable_instore_hours": "boolean",
    "enable_pickup_hours": "boolean",
    "enable_curbside_hours": "boolean",
    "canfleet_enable_delivery_hours": "boolean",
    "mail_order_linked": "string"
  },
  "woocommerce_attributes_terms": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "description": "string",
    "menu_order": "number",
    "count": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_order": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "parent_id": "number",
    "number": "string",
    "order_key": "string",
    "created_via": "string",
    "version": "string",
    "status": "string",
    "currency": "string",
    "date_created": "string",
    "date_created_gmt": "string",
    "date_modified": "string",
    "date_modified_gmt": "string",
    "discount_total": "string",
    "discount_tax": "string",
    "shipping_total": "string",
    "shipping_tax": "string",
    "cart_tax": "string",
    "total": "string",
    "total_tax": "string",
    "prices_include_tax": "boolean",
    "customer_id": "number",
    "customer_ip_address": "string",
    "customer_user_agent": "string",
    "customer_note": "string",
    "billing": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "postcode": "string",
      "country": "string",
      "email": "string",
      "phone": "string"
    },
    "shipping": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "postcode": "string",
      "country": "string"
    },
    "payment_method": "string",
    "payment_method_title": "string",
    "transaction_id": "string",
    "date_paid": "string",
    "date_paid_gmt": "string",
    "date_completed": "string",
    "date_completed_gmt": "string",
    "cart_hash": "string",
    "meta_data": [
      {
        "id": "object",
        "key": "object",
        "value": "object"
      }
    ],
    "line_items": [
      {
        "id": "object",
        "name": "object",
        "product_id": "object",
        "variation_id": "object",
        "quantity": "object",
        "tax_class": "object",
        "subtotal": "object",
        "subtotal_tax": "object",
        "total": "object",
        "total_tax": "object",
        "taxes": "object",
        "meta_data": "object",
        "sku": "object",
        "price": "object",
        "cog_item_cost": "object",
        "cog_item_total_cost": "object"
      }
    ],
    "tax_lines": [],
    "shipping_lines": [
      {
        "id": "object",
        "method_title": "object",
        "method_id": "object",
        "instance_id": "object",
        "total": "object",
        "total_tax": "object",
        "taxes": "object",
        "meta_data": "object"
      }
    ],
    "fee_lines": [],
    "coupon_lines": [],
    "refunds": [],
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "customer": [
        "object"
      ]
    },
    "order_notes": [
      {
        "id": "object",
        "author": "object",
        "date_created": "object",
        "date_created_gmt": "object",
        "note": "object",
        "customer_note": "object",
        "_links": "object"
      }
    ],
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    },
    "date_completed_from_str": "Date",
    "date_completed_gmt_from_str": "Date",
    "date_created_from_str": "Date",
    "date_created_gmt_from_str": "Date",
    "date_modified_from_str": "Date",
    "date_modified_gmt_from_str": "Date",
    "date_paid_from_str": "Date",
    "date_paid_gmt_from_str": "Date"
  },
  "unify_red_dot_states": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "bsOrgId": "string",
    "userId": "string",
    "__v": "number",
    "chat": {
      "updatedAt": "Date",
      "value": "boolean"
    },
    "createdAt": "Date",
    "new_driver": {
      "updatedAt": "Date",
      "value": "boolean"
    },
    "order": {
      "updatedAt": "Date",
      "value": "boolean"
    },
    "task_update": {
      "updatedAt": "Date",
      "value": "boolean"
    },
    "updatedAt": "Date"
  },
  "users": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "user_email": "string",
    "email_verified": "boolean",
    "first_name": "string",
    "last_name": "string",
    "user_firebase_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "default_org": "string",
    "default_store": "string",
    "user_settings": {
      "general_settings": {
        "default_org": "object",
        "default_store": "object"
      },
      "store_settings": [
        "object"
      ]
    },
    "last_read_notification": "Date",
    "photo": "string",
    "photo_type": "string",
    "full_name": "string",
    "photo_url": "string",
    "service_display_name": "string",
    "cs_user_id": "string"
  },
  "woocommerce_shipping_zones_methods": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "instance_id": "number",
    "title": "string",
    "order": "number",
    "enabled": "boolean",
    "method_id": "string",
    "method_title": "string",
    "method_description": "string",
    "settings": {
      "title": {
        "id": "object",
        "label": "object",
        "description": "object",
        "type": "object",
        "value": "object",
        "default": "object",
        "tip": "object",
        "placeholder": "object"
      },
      "requires": {
        "id": "object",
        "label": "object",
        "description": "object",
        "type": "object",
        "value": "object",
        "default": "object",
        "tip": "object",
        "placeholder": "object",
        "options": "object"
      },
      "min_amount": {
        "id": "object",
        "label": "object",
        "description": "object",
        "type": "object",
        "value": "object",
        "default": "object",
        "tip": "object",
        "placeholder": "object"
      }
    },
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ],
      "describes": [
        "object"
      ]
    },
    "zone_id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "flowhub_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "average_order_amount": "number",
    "average_order_items": "number",
    "birthDate": "string",
    "bought_product_ids": [],
    "city": "string",
    "clv": "number",
    "completed_orders": "number",
    "consentsToPromotionalEmail": "boolean",
    "consentsToPromotionalSMS": "boolean",
    "createdAt": "string",
    "email": "string",
    "first_completed_order_date": "null",
    "first_completed_order_date_at": {},
    "groups": [],
    "isLoyal": "boolean",
    "last_order_date": "null",
    "loyaltyEnrolledAt": "null",
    "loyaltyPoints": "null",
    "name": "string",
    "payment_method_ids": [],
    "phone": "string",
    "purchase_location_ids": [],
    "state": "string",
    "streetAddress1": "string",
    "streetAddress2": "null",
    "total_online_orders": "number",
    "total_order_items": "number",
    "total_orders": "number",
    "total_pos_orders": "number",
    "type": "string",
    "updatedAt": "string",
    "zip": "string"
  },
  "cova_order_refund_temp": "empty",
  "woocommerce_shipping_methods_old": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "greenline_requests_count": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "date": "Date",
    "count": "number"
  },
  "llamaindex_gemini": {
    "_id": "string",
    "embedding": [
      "number"
    ],
    "text": "string",
    "metadata": {
      "page_label": "string",
      "file_name": "string",
      "file_path": "string",
      "file_type": "string",
      "file_size": "number",
      "creation_date": "string",
      "last_modified_date": "string",
      "_node_content": "string",
      "_node_type": "string",
      "document_id": "string",
      "doc_id": "string",
      "ref_doc_id": "string"
    }
  },
  "queue_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "queue_type": "string",
    "queue_action": "string",
    "queue_data": {
      "job_data": {
        "store_id": "object",
        "warehouses": "object"
      },
      "job_task_status": "string",
      "job_machine_status": "string"
    },
    "queue_status": "number",
    "_created": "Date",
    "_updated": "Date",
    "log_message": "string"
  },
  "budsense_variations_backup": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "barcode": "string",
    "company_id": "number",
    "location_id": "number",
    "assets": "null",
    "brand": "string",
    "brandAssets": {
      "PrimaryBrand": [
        "object"
      ]
    },
    "cannabisUnitOfMeasure": "string",
    "cbd": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "classification": "string",
    "delisted": "boolean",
    "description": "string",
    "manufacturer": "string",
    "name": "string",
    "packagedQuantity": "number",
    "presentTerpenes": "null",
    "productType": "string",
    "secondaryCannabinoids": "null",
    "shortDescription": "string",
    "sku": "string",
    "strain": "string",
    "tac": "null",
    "terpeneUnitOfMeasure": "string",
    "thc": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "topTerpene": "string",
    "totalTerpene": "null",
    "unitOfMeasure": "string",
    "unitSize": "number",
    "variantType": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_customer": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "PrimaryName": "string",
    "Title": "string",
    "AlternateName": "string",
    "MiddleName": "string",
    "FamilyName": "string",
    "ReferralSource": "string",
    "Notes": "string",
    "UniqueIdentifier": "string",
    "CustomerTypeId": "number",
    "CustomerType": "string",
    "DateOfBirth": "string",
    "PricingGroupId": "null",
    "Disabled": "boolean",
    "DoNotContact": "boolean",
    "Version": "number",
    "MergedIntoCustomerId": "null",
    "Addresses": [
      {
        "Id": "object",
        "CustomerId": "object",
        "AddressTypeId": "object",
        "AddressType": "object",
        "Default": "object",
        "DoNotContact": "object",
        "CountryCode": "object",
        "Country": "object",
        "Locality": "object",
        "StateCode": "object",
        "State": "object",
        "PostalCode": "object",
        "PostOfficeBoxNumber": "object",
        "StreetAddress1": "object",
        "StreetAddress2": "object",
        "Notes": "object",
        "Version": "object",
        "AttentionTo": "object",
        "Phone": "object",
        "Email": "object"
      }
    ],
    "ContactMethods": [
      {
        "Value": "object",
        "Id": "object",
        "CustomerId": "object",
        "ContactMethodCategoryId": "object",
        "ContactMethodCategory": "object",
        "ContactMethodTypeId": "object",
        "ContactMethodType": "object",
        "DoNotContact": "object",
        "Default": "object",
        "Notes": "object",
        "Version": "object"
      }
    ],
    "CustomerExtensions": [],
    "RelatedCustomers": [],
    "MemberOf": [],
    "Documents": [],
    "MergedCustomers": [],
    "LastModifiedDateUtc": "string",
    "TotalOrders": "number",
    "CLV": "number",
    "FirstOrderDate": "null",
    "LastOrderDate": "null",
    "BSCustomerType": "number",
    "BoughtProducts": {
      "pos": {},
      "online": {}
    },
    "WooRecordDeletedDate": "string",
    "WooRecordCreatedDate": "string",
    "CompanyId": "number",
    "SyncStatus": "number",
    "WooSyncStatus": "number"
  },
  "coupon_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "coupon_id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "note": "string",
    "type": "string"
  },
  "warehouse_zones": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "enable": "boolean",
    "delivery_fee": "number",
    "delivery_fee_type": "string",
    "delivery_minimum": "number",
    "area_type": "string",
    "long_lat": {
      "type": "string",
      "coordinates": [
        "object"
      ]
    },
    "_created": "Date",
    "_updated": "Date",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "moneris_log": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "validated_data": {
      "warehouse_id": "string",
      "total": "number",
      "customer_id": "number",
      "order_id": "number",
      "billing": {
        "address_1": "object",
        "address_2": "object",
        "city": "object",
        "province": "object",
        "country": "object",
        "postal_code": "object"
      }
    },
    "order_no": "string",
    "res": {
      "response": {
        "success": "object",
        "ticket": "object"
      }
    },
    "_updated": "Date",
    "receipt": {
      "response": {
        "success": "object",
        "error": "object"
      }
    }
  },
  "webhook_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "webhook_data": {
      "id": "number",
      "name": "string",
      "slug": "string",
      "permalink": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "type": "string",
      "status": "string",
      "featured": "boolean",
      "catalog_visibility": "string",
      "description": "string",
      "short_description": "string",
      "sku": "string",
      "price": "string",
      "regular_price": "string",
      "sale_price": "string",
      "date_on_sale_from": "null",
      "date_on_sale_from_gmt": "null",
      "date_on_sale_to": "null",
      "date_on_sale_to_gmt": "null",
      "on_sale": "boolean",
      "purchasable": "boolean",
      "total_sales": "number",
      "virtual": "boolean",
      "downloadable": "boolean",
      "downloads": [],
      "download_limit": "number",
      "download_expiry": "number",
      "external_url": "string",
      "button_text": "string",
      "tax_status": "string",
      "tax_class": "string",
      "manage_stock": "boolean",
      "stock_quantity": "null",
      "backorders": "string",
      "backorders_allowed": "boolean",
      "backordered": "boolean",
      "low_stock_amount": "null",
      "sold_individually": "boolean",
      "weight": "string",
      "dimensions": {
        "length": "object",
        "width": "object",
        "height": "object"
      },
      "shipping_required": "boolean",
      "shipping_taxable": "boolean",
      "shipping_class": "string",
      "shipping_class_id": "number",
      "reviews_allowed": "boolean",
      "average_rating": "string",
      "rating_count": "number",
      "upsell_ids": [],
      "cross_sell_ids": [],
      "parent_id": "number",
      "purchase_note": "string",
      "categories": [
        "object"
      ],
      "brands": [],
      "tags": [],
      "images": [
        "object"
      ],
      "attributes": [
        "object"
      ],
      "default_attributes": [],
      "variations": [],
      "grouped_products": [],
      "menu_order": "number",
      "price_html": "string",
      "related_ids": [
        "object"
      ],
      "meta_data": [
        "object"
      ],
      "stock_status": "string",
      "has_options": "boolean",
      "post_password": "string",
      "global_unique_id": "string",
      "composite_virtual": "boolean",
      "composite_layout": "string",
      "composite_add_to_cart_form_location": "string",
      "composite_editable_in_cart": "boolean",
      "composite_sold_individually_context": "string",
      "composite_shop_price_calc": "string",
      "composite_components": [
        "object"
      ],
      "composite_scenarios": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    },
    "webhook_action": "string",
    "webhook_status": "number",
    "source": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "lightspeed_brand": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "name": "string",
    "description": "null",
    "deleted_at": "null",
    "version": "number",
    "_created": "Date",
    "_updated": "Date",
    "company_id": "string",
    "woo_mapping": {
      "id": "number"
    },
    "sync_status": "string"
  },
  "flowhub_orders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "location_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "budtender": "string",
    "budtenderId": "string",
    "clientId": "string",
    "completedOn": "Date",
    "createdAt": "Date",
    "currentPoints": "number",
    "customerId": "string",
    "customerType": "string",
    "fullName": "string",
    "integratorId": "null",
    "itemsInCart": [
      {
        "brand": "object",
        "category": "object",
        "id": "object",
        "itemDiscounts": "object",
        "parentProductId": "object",
        "productId": "object",
        "productName": "object",
        "quantity": "object",
        "regulatoryId": "object",
        "sku": "object",
        "strainName": "object",
        "tax": "object",
        "title1": "object",
        "title2": "object",
        "totalCost": "object",
        "totalDiscounts": "object",
        "totalPrice": "object",
        "type": "object",
        "unitCost": "object",
        "unitOfWeight": "object",
        "unitPrice": "object",
        "variantId": "object"
      }
    ],
    "locationId": "string",
    "locationName": "string",
    "name": "string",
    "orderId": "null",
    "orderStatus": "string",
    "orderType": "string",
    "originalSaleId": "null",
    "payments": [
      {
        "_id": "object",
        "amount": "object",
        "paymentType": "object"
      }
    ],
    "receiptId": "string",
    "total_items": "number",
    "totals": {
      "finalTotal": "number",
      "subTotal": "number",
      "totalDiscounts": "number",
      "totalFees": "number",
      "totalTaxes": "number"
    },
    "voided": "boolean"
  },
  "drivers_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "age_check_pass": "boolean",
    "assigned_to": "null",
    "attempts": "null",
    "order_status": "string",
    "completed": "boolean",
    "created": "Date",
    "datetime_picked_up ": "null",
    "driver_info": {
      "driver": "null",
      "plate_number": "null",
      "contact_number": "null",
      "service_fee": "null"
    },
    "date_completed": "null",
    "delivery_fee": "number",
    "driver_notes": {},
    "dropped_off": "boolean",
    "dropped_off_photo": "null",
    "estimated_time_delivery": "null",
    "restricted_drivers": [
      "number"
    ],
    "issues": [],
    "name": "string",
    "number_of_packages": "number",
    "order_notes": "string",
    "order_number": "number",
    "phone": "string",
    "picked_up": "boolean",
    "picked_up_photo": "null",
    "pickup_location": {
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "country": "string",
      "postal_code": "string",
      "lattitude": "number",
      "longitude": "number"
    },
    "req_age_validator": "boolean",
    "returned": "boolean",
    "sender_info": {
      "store_name": "string",
      "store_url": "string"
    },
    "shipping_fee": "string",
    "shipping_info": {
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "state": "string",
      "country": "string",
      "postal_code": "string",
      "lattitude": "number",
      "longitude": "number"
    },
    "done_picking": "boolean",
    "signature": "null",
    "updated": "null",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "shipping_method": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "woocommerce_tags": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "slug": "string",
    "description": "string",
    "count": "number",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "cova_tax_category": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "CompanyId": "number",
    "Name": "string",
    "Slug": "string",
    "Description": "string",
    "IsDefault": "boolean",
    "ProductCatalogIds": [
      "string"
    ],
    "TaxMapping": {
      "Id": "string",
      "CompanyId": "number",
      "TaxCategory": "null",
      "TaxCategoryId": "string",
      "CorrelationId": "string",
      "TaxRateIds": [
        "object"
      ],
      "TaxRates": [
        "object"
      ]
    },
    "SyncStatus": "number",
    "WooSyncStatus": "number"
  },
  "store_fulfillment": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "warehouses": {
      "6715f8936272f4dcd64b99d3": "string",
      "6715cc0914cbefb812639cf3": "string"
    }
  },
  "chatbot_keys": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "api_key": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "birchmount_coupons": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "card": "string",
    "status": "string",
    "_created": "Date",
    "_updated": "Date",
    "coupon": {
      "id": "number",
      "code": "string",
      "amount": "string",
      "status": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "discount_type": "string",
      "description": "string",
      "date_expires": "null",
      "date_expires_gmt": "null",
      "usage_count": "number",
      "individual_use": "boolean",
      "product_ids": [],
      "excluded_product_ids": [],
      "usage_limit": "number",
      "usage_limit_per_user": "null",
      "limit_usage_to_x_items": "null",
      "free_shipping": "boolean",
      "product_categories": [],
      "excluded_product_categories": [],
      "exclude_sale_items": "boolean",
      "minimum_amount": "string",
      "maximum_amount": "string",
      "email_restrictions": [],
      "used_by": [],
      "meta_data": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    }
  },
  "announcement_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "announcement_id": {
      "buffer": "Buffer/Binary"
    },
    "title": "string",
    "old_data": {
      "_id": {
        "buffer": "object"
      },
      "message_description": "string",
      "start_time": "Date",
      "end_time": "Date",
      "timezone": "string",
      "created_by": {
        "buffer": "object"
      },
      "created_by_name": "string",
      "created_at": "Date",
      "updated_at": "Date",
      "image": "string"
    },
    "new_data": {
      "start_time": "Date",
      "end_time": "Date",
      "timezone": "string"
    },
    "created_by": {
      "buffer": "Buffer/Binary"
    },
    "created_at": "Date",
    "updated_at": "Date"
  },
  "inventory_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "image": "null",
    "upc_code": "string",
    "bin_location": "string",
    "cost": "null",
    "weight": "null",
    "length": "null",
    "width": "null",
    "height": "null",
    "carrying_stores": [
      {
        "buffer": "object"
      }
    ],
    "storing_warehouses": [
      {
        "warehouse_id": "object",
        "available": "object",
        "reserved": "object",
        "booked": "object",
        "in_transit": "object",
        "aisle": "object",
        "bin_location": "object"
      }
    ],
    "sku": "string"
  },
  "lightspeed_batch_update_stock_quantity": "empty",
  "greenline_categories": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "categoryType": "string",
    "colorHex": "string",
    "complianceCategoryId": "number",
    "description": "null",
    "listOrder": "null",
    "name": "string",
    "parentCategoryId": "string",
    "cannabisCategory": "null",
    "cannabisType": "null",
    "categoryLocationOverrides": [],
    "exitLabel": "null",
    "imageUrl": "null",
    "isActive": "boolean",
    "lowInventoryThreshold": "null",
    "measurementType": "null",
    "platformComplianceCategoryId": "null"
  },
  "delayed_requests": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "cached_key": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "parameters": {
      "store_id": "string",
      "start_date": "string",
      "end_date": "string",
      "components": [
        "object"
      ]
    },
    "running_at": "Date",
    "type": "string"
  },
  "llamaindex_test": "empty",
  "paramountpay_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "txn_num": [
      "string"
    ],
    "merchant_user_id": [
      "string"
    ],
    "txn_fee": [
      "string"
    ],
    "txn_currency": [
      "string"
    ],
    "user_id": [
      "string"
    ],
    "txn_type": [
      "string"
    ],
    "merchant_txn_num": [
      "string"
    ],
    "channel": [
      "string"
    ],
    "error_code": [
      "string"
    ],
    "merchant_id": [
      "string"
    ],
    "txn_amount": [
      "string"
    ],
    "customer_email": [
      "string"
    ],
    "txn_status": [
      "string"
    ],
    "extra_field_1": [
      "string"
    ],
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_locations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "number",
    "Name": "string",
    "DisplayName": "string",
    "Description": "string",
    "Roles": [
      {
        "Name": "object"
      }
    ],
    "Role": "string",
    "LocationStatus": "string",
    "LocationType": "string",
    "LocationSubType": "null",
    "Address": {
      "AddressLine1": "string",
      "AddressLine2": "null",
      "City": "string",
      "StateCode": "string",
      "StateName": "string",
      "CountryCode": "string",
      "CountryName": "string",
      "Zip": "string"
    },
    "Contacts": [],
    "StorePhoneNumbers": [],
    "Area": "null",
    "StoreHours": {
      "Monday": {
        "Open": "object",
        "Close": "object"
      },
      "Tuesday": {
        "Open": "object",
        "Close": "object"
      },
      "Wednesday": {
        "Open": "object",
        "Close": "object"
      },
      "Thursday": {
        "Open": "object",
        "Close": "object"
      },
      "Friday": {
        "Open": "object",
        "Close": "object"
      },
      "Saturday": {
        "Open": "object",
        "Close": "object"
      },
      "Sunday": {
        "Open": "object",
        "Close": "object"
      }
    },
    "Geography": "null",
    "TimeZone": {
      "Id": "string",
      "DaylightSavingTimeEnabled": "boolean"
    },
    "Version": "number",
    "CreatedUtc": "Date",
    "LastModifiedUtc": "Date",
    "CorrelationId": "null",
    "ClientEntityId": "null",
    "TypeId": "number",
    "Logo": "null",
    "Website": "null",
    "CompanyId": "number"
  },
  "warehouse_statistics": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "timezone": "string",
    "date": "string",
    "available": "number",
    "booked": "number",
    "reserved": "number",
    "backorder": "number",
    "stockout": "number"
  },
  "flowhub_order_ahead_callback": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "locationId": "string",
    "customerExternalId": "string",
    "orderId": "string",
    "postbackUrl": "string",
    "status": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "alpine_iq_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "phone": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "alpine_iq_data": {
      "platforms": "null",
      "contactID": "string",
      "srcID": "string",
      "referCode": "string",
      "referLink": "string",
      "exists": "boolean"
    },
    "coupon": {
      "id": "number",
      "code": "string",
      "amount": "string",
      "status": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "discount_type": "string",
      "description": "string",
      "date_expires": "null",
      "date_expires_gmt": "null",
      "usage_count": "number",
      "individual_use": "boolean",
      "product_ids": [],
      "excluded_product_ids": [],
      "usage_limit": "number",
      "usage_limit_per_user": "null",
      "limit_usage_to_x_items": "null",
      "free_shipping": "boolean",
      "product_categories": [],
      "excluded_product_categories": [],
      "exclude_sale_items": "boolean",
      "minimum_amount": "string",
      "maximum_amount": "string",
      "email_restrictions": [],
      "used_by": [],
      "meta_data": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    },
    "email": "string",
    "status": "string"
  },
  "cova_inventory_product_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "cova_location_id": "number",
    "log_type": "string",
    "inventory_product_id": {
      "buffer": "Buffer/Binary"
    },
    "catalog_item_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number",
    "cova_order_id": "string",
    "adjustment_quantity": "number",
    "is_valid": "boolean"
  },
  "insight_requests": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "start_date": "Date",
    "end_date": "Date",
    "location_ids": [
      "number"
    ],
    "components": [
      {
        "type": "object",
        "config": "object"
      }
    ],
    "status": "string",
    "results": {}
  },
  "error_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number": "number",
    "type": "string",
    "_created": "Date"
  },
  "cache_geocoding": "empty",
  "lightspeed_statistic_inventory_quantity_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "company_id": "string",
    "location_id": "string",
    "product_id": "string",
    "quantity": "number"
  },
  "customer_documents": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "operator_id": {
      "buffer": "Buffer/Binary"
    },
    "customer_id": "number",
    "name": "string",
    "type": "string",
    "title": "string",
    "description": "string"
  },
  "devices": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "active": "boolean",
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "registration_id": "string",
    "type": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "covapay_capture_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": "string",
    "payment_id": "string",
    "session_id": "string",
    "payment_data": {
      "resultCode": "string",
      "sessionData": "string"
    }
  },
  "lightspeed_outlet_product_tax": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "outlet_id": "string",
    "product_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "deleted_at": "null",
    "tax_id": "string",
    "version": "number"
  },
  "store_onfleets": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "api_value": "string",
    "warehouses": {
      "63e4997dbbea8bdb2e9ef3c2": {
        "onfleet_enabled": "object",
        "delivery_minimum_before_taxes": "object",
        "area_type": "object",
        "store_hours": "object",
        "timezone": "object",
        "store_hours_message": "object"
      }
    }
  },
  "filters": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "filter_type": "string",
    "filter": {
      "username": "string",
      "first_name": "string",
      "last_name": "string",
      "address_line_1": "string",
      "address_line_2": "string",
      "country": [],
      "state": [],
      "city": "string",
      "postcode": "string",
      "phone": "string",
      "email": "string",
      "clv": {
        "from": "object",
        "to": "object"
      },
      "status": [
        "object"
      ],
      "order_id": "string",
      "shipping_zone_method_title": "null",
      "tracking_id": "string",
      "payment_method_title": "null",
      "product_ids": [],
      "category_ids": [],
      "order_total": {
        "from": "object",
        "to": "object"
      },
      "total_items": {
        "from": "object",
        "to": "object"
      }
    }
  },
  "warehouses_links": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "priority": "number",
    "_created": "Date",
    "_updated": "Date"
  },
  "woo_predefined_category": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "settings": {
      "classification_settings": [
        "object"
      ]
    }
  },
  "sync_order_detail": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "invoice_cost": "null",
    "is_adding_location": "boolean",
    "syncing_at": "Date"
  },
  "greenline_budtenders": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "lastest_tendered_time": "Date",
    "name": "string"
  },
  "statistic_inventory_quantity_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "inventory_id": {
      "buffer": "Buffer/Binary"
    },
    "quantity": "number"
  },
  "llamaindex_gemini_embedding_exp_03_07": {
    "_id": "string",
    "embedding": [
      "number"
    ],
    "text": "string",
    "metadata": {
      "page_label": "string",
      "file_name": "string",
      "file_path": "string",
      "file_type": "string",
      "file_size": "number",
      "creation_date": "string",
      "last_modified_date": "string",
      "_node_content": "string",
      "_node_type": "string",
      "document_id": "string",
      "doc_id": "string",
      "ref_doc_id": "string"
    }
  },
  "cova_classificationtrees_temp": "empty",
  "woocommerce_tax_rates": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "country": "string",
    "state": "string",
    "postcode": "string",
    "city": "string",
    "rate": "string",
    "name": "string",
    "priority": "number",
    "compound": "boolean",
    "shipping": "boolean",
    "order": "number",
    "class": "string",
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "skus_barcodes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "key": "string",
    "_updated": "Date",
    "value": [
      "string"
    ]
  },
  "homerun_webhook_api_keys": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "api_key": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "external_company_api_keys": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "external_company_name": "string",
    "api_key": "string",
    "allowed_endpoints": [
      "string"
    ],
    "_created": "Date",
    "_updated": "Date"
  },
  "woocommerce_tax_classes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "slug": "string",
    "name": "string",
    "_links": {
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "of_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "taskId": "string",
    "workerId": "string",
    "actionContext": {
      "type": "string",
      "id": "string"
    },
    "triggerId": "number",
    "triggerName": "string",
    "adminId": "string",
    "data": {
      "task": {
        "id": "object",
        "timeCreated": "object",
        "timeLastModified": "object",
        "organization": "object",
        "shortId": "object",
        "trackingURL": "object",
        "worker": "object",
        "merchant": "object",
        "executor": "object",
        "creator": "object",
        "dependencies": "object",
        "state": "object",
        "completeAfter": "object",
        "completeBefore": "object",
        "pickupTask": "object",
        "notes": "object",
        "completionDetails": "object",
        "feedback": "object",
        "metadata": "object",
        "overrides": "object",
        "quantity": "object",
        "additionalQuantities": "object",
        "serviceTime": "object",
        "identity": "object",
        "appearance": "object",
        "scanOnlyRequiredBarcodes": "object",
        "requirements": "object",
        "container": "object",
        "trackingViewed": "object",
        "estimatedCompletionTime": "object",
        "estimatedArrivalTime": "object",
        "recipients": "object",
        "destination": "object",
        "delayTime": "object"
      },
      "worker": {
        "id": "object",
        "timeCreated": "object",
        "timeLastModified": "object",
        "organization": "object",
        "name": "object",
        "displayName": "object",
        "phone": "object",
        "activeTask": "object",
        "tasks": "object",
        "onDuty": "object",
        "timeLastSeen": "object",
        "capacity": "object",
        "additionalCapacities": "object",
        "userData": "object",
        "accountStatus": "object",
        "metadata": "object",
        "timezone": "object",
        "teams": "object",
        "imageUrl": "object",
        "delayTime": "object",
        "location": "object",
        "hasRecentlyUsedSpoofedLocations": "object",
        "vehicle": "object"
      }
    },
    "time": "number",
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "aeropay_transactions": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "success": "boolean",
    "error": "null",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "merchantCategories": [
      "string"
    ],
    "storeAddress": "string",
    "attributes": [],
    "uuid": "string",
    "transactionId": "string",
    "timestamp": "string",
    "merchantName": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "customer_id": "number",
    "_created": "Date",
    "_updated": "Date"
  },
  "covapay_refunds": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "Id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": "string",
    "order_reference": "string",
    "session_id": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "stickycard_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "email": "string",
    "phone": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "stickycard_data": {
      "balance": "number",
      "discounts": [
        "object"
      ]
    },
    "verification_code": "string",
    "coupon": {
      "id": "number",
      "code": "string",
      "amount": "string",
      "status": "string",
      "date_created": "string",
      "date_created_gmt": "string",
      "date_modified": "string",
      "date_modified_gmt": "string",
      "discount_type": "string",
      "description": "string",
      "date_expires": "null",
      "date_expires_gmt": "null",
      "usage_count": "number",
      "individual_use": "boolean",
      "product_ids": [],
      "excluded_product_ids": [],
      "usage_limit": "number",
      "usage_limit_per_user": "null",
      "limit_usage_to_x_items": "null",
      "free_shipping": "boolean",
      "product_categories": [],
      "excluded_product_categories": [],
      "exclude_sale_items": "boolean",
      "minimum_amount": "string",
      "maximum_amount": "string",
      "email_restrictions": [],
      "used_by": [],
      "meta_data": [],
      "_links": {
        "self": "object",
        "collection": "object"
      }
    }
  },
  "covapay_sessions": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "sessionId": "string",
    "id": "string",
    "sessionData": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "recommendation_stores": "empty",
  "tpd_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "booking_type": "string",
    "pickup_address": "string",
    "dropoff_address": "string",
    "pickup_latitude": "string",
    "pickup_longitude": "string",
    "dropoff_latitude": "string",
    "dropoff_longitude": "string",
    "booking_date": "string",
    "booking_time": "string",
    "status": "string",
    "booking_at": "string",
    "completed_at": "null",
    "reference": "number",
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number"
  },
  "product_events": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "product_id": "string",
    "type": "string"
  },
  "woocommerce_settings": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "label": "string",
    "description": "string",
    "type": "string",
    "default": "string",
    "value": [],
    "options": {
      "AX": "string",
      "AF": "string",
      "AL": "string",
      "DZ": "string",
      "AS": "string",
      "AD": "string",
      "AO": "string",
      "AI": "string",
      "AQ": "string",
      "AG": "string",
      "AR": "string",
      "AM": "string",
      "AW": "string",
      "AU": "string",
      "AT": "string",
      "AZ": "string",
      "BS": "string",
      "BH": "string",
      "BD": "string",
      "BB": "string",
      "BY": "string",
      "PW": "string",
      "BE": "string",
      "BZ": "string",
      "BJ": "string",
      "BM": "string",
      "BT": "string",
      "BO": "string",
      "BQ": "string",
      "BA": "string",
      "BW": "string",
      "BV": "string",
      "BR": "string",
      "IO": "string",
      "BN": "string",
      "BG": "string",
      "BF": "string",
      "BI": "string",
      "KH": "string",
      "CM": "string",
      "CA": "string",
      "CV": "string",
      "KY": "string",
      "CF": "string",
      "TD": "string",
      "CL": "string",
      "CN": "string",
      "CX": "string",
      "CC": "string",
      "CO": "string",
      "KM": "string",
      "CG": "string",
      "CD": "string",
      "CK": "string",
      "CR": "string",
      "HR": "string",
      "CU": "string",
      "CW": "string",
      "CY": "string",
      "CZ": "string",
      "DK": "string",
      "DJ": "string",
      "DM": "string",
      "DO": "string",
      "EC": "string",
      "EG": "string",
      "SV": "string",
      "GQ": "string",
      "ER": "string",
      "EE": "string",
      "ET": "string",
      "FK": "string",
      "FO": "string",
      "FJ": "string",
      "FI": "string",
      "FR": "string",
      "GF": "string",
      "PF": "string",
      "TF": "string",
      "GA": "string",
      "GM": "string",
      "GE": "string",
      "DE": "string",
      "GH": "string",
      "GI": "string",
      "GR": "string",
      "GL": "string",
      "GD": "string",
      "GP": "string",
      "GU": "string",
      "GT": "string",
      "GG": "string",
      "GN": "string",
      "GW": "string",
      "GY": "string",
      "HT": "string",
      "HM": "string",
      "HN": "string",
      "HK": "string",
      "HU": "string",
      "IS": "string",
      "IN": "string",
      "ID": "string",
      "IR": "string",
      "IQ": "string",
      "IE": "string",
      "IM": "string",
      "IL": "string",
      "IT": "string",
      "CI": "string",
      "JM": "string",
      "JP": "string",
      "JE": "string",
      "JO": "string",
      "KZ": "string",
      "KE": "string",
      "KI": "string",
      "KW": "string",
      "KG": "string",
      "LA": "string",
      "LV": "string",
      "LB": "string",
      "LS": "string",
      "LR": "string",
      "LY": "string",
      "LI": "string",
      "LT": "string",
      "LU": "string",
      "MO": "string",
      "MG": "string",
      "MW": "string",
      "MY": "string",
      "MV": "string",
      "ML": "string",
      "MT": "string",
      "MH": "string",
      "MQ": "string",
      "MR": "string",
      "MU": "string",
      "YT": "string",
      "MX": "string",
      "FM": "string",
      "MD": "string",
      "MC": "string",
      "MN": "string",
      "ME": "string",
      "MS": "string",
      "MA": "string",
      "MZ": "string",
      "MM": "string",
      "NA": "string",
      "NR": "string",
      "NP": "string",
      "NL": "string",
      "NC": "string",
      "NZ": "string",
      "NI": "string",
      "NE": "string",
      "NG": "string",
      "NU": "string",
      "NF": "string",
      "KP": "string",
      "MK": "string",
      "MP": "string",
      "NO": "string",
      "OM": "string",
      "PK": "string",
      "PS": "string",
      "PA": "string",
      "PG": "string",
      "PY": "string",
      "PE": "string",
      "PH": "string",
      "PN": "string",
      "PL": "string",
      "PT": "string",
      "PR": "string",
      "QA": "string",
      "RE": "string",
      "RO": "string",
      "RU": "string",
      "RW": "string",
      "ST": "string",
      "BL": "string",
      "SH": "string",
      "KN": "string",
      "LC": "string",
      "SX": "string",
      "MF": "string",
      "PM": "string",
      "VC": "string",
      "WS": "string",
      "SM": "string",
      "SA": "string",
      "SN": "string",
      "RS": "string",
      "SC": "string",
      "SL": "string",
      "SG": "string",
      "SK": "string",
      "SI": "string",
      "SB": "string",
      "SO": "string",
      "ZA": "string",
      "GS": "string",
      "KR": "string",
      "SS": "string",
      "ES": "string",
      "LK": "string",
      "SD": "string",
      "SR": "string",
      "SJ": "string",
      "SZ": "string",
      "SE": "string",
      "CH": "string",
      "SY": "string",
      "TW": "string",
      "TJ": "string",
      "TZ": "string",
      "TH": "string",
      "TL": "string",
      "TG": "string",
      "TK": "string",
      "TO": "string",
      "TT": "string",
      "TN": "string",
      "TR": "string",
      "TM": "string",
      "TC": "string",
      "TV": "string",
      "UG": "string",
      "UA": "string",
      "AE": "string",
      "GB": "string",
      "US": "string",
      "UM": "string",
      "UY": "string",
      "UZ": "string",
      "VU": "string",
      "VA": "string",
      "VE": "string",
      "VN": "string",
      "VG": "string",
      "VI": "string",
      "WF": "string",
      "EH": "string",
      "YE": "string",
      "ZM": "string",
      "ZW": "string"
    },
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "store_datasources": "empty",
  "cova_logging": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "type": "string",
    "message": "string",
    "data": "null",
    "_created": "Date"
  },
  "products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "location_id": "number",
    "barcode": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "assetUrls": [
      {
        "small": "object",
        "large": "object"
      }
    ],
    "assets": {
      "Product": [
        "object"
      ]
    },
    "brand": "string",
    "cannabisUnitOfMeasure": "string",
    "cbd": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "classification": "string",
    "delisted": "boolean",
    "description": "string",
    "manufacturer": "string",
    "name": "string",
    "packagedQuantity": "number",
    "productType": "string",
    "shortDescription": "string",
    "strain": "string",
    "thc": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "unitOfMeasure": "string",
    "unitSize": "number",
    "variantType": "string",
    "sku": "string"
  },
  "cova_catalog_pricing_temp": "empty",
  "cova_invoice": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "Id": "string",
    "Annotation": "string",
    "CashBack": "number",
    "ChangeDue": "number",
    "CreatedByUser": "string",
    "CreatedDateUtc": "string",
    "Customer": {
      "Id": "string",
      "Number": "string",
      "FullName": "string",
      "BillingAddress": {
        "Id": "object",
        "CountryCode": "object",
        "Locality": "object",
        "StateCode": "object",
        "PostalCode": "object",
        "PostOfficeBoxNumber": "object",
        "StreetAddress1": "object",
        "StreetAddress2": "object",
        "Notes": "object"
      },
      "ShippingAddress": {
        "Id": "object",
        "CountryCode": "object",
        "Locality": "object",
        "StateCode": "object",
        "PostalCode": "object",
        "PostOfficeBoxNumber": "object",
        "StreetAddress1": "object",
        "StreetAddress2": "object",
        "Notes": "object"
      }
    },
    "Discounts": "null",
    "DropshipOrders": [],
    "InvoiceType": "string",
    "LocationId": "number",
    "Notes": "string",
    "Orders": [
      {
        "Id": "object",
        "PrintableId": "object",
        "ReferenceId": "object",
        "Items": "object"
      }
    ],
    "OriginalInvoiceId": "null",
    "OriginalPrintableId": "null",
    "OriginalReceiptNumber": "null",
    "OriginallyCreatedByUser": "string",
    "OriginallyCreatedByUserId": "number",
    "Payments": [
      {
        "Id": "object",
        "OriginalPaymentId": "object",
        "DrawerId": "object",
        "Last4Digits": "object",
        "CustomerAccountId": "object",
        "PaymentMethodId": "object",
        "PaymentMethodName": "object",
        "Amount": "object",
        "TransactionDateUtc": "object"
      }
    ],
    "PricingScheme": "string",
    "PrintableId": "string",
    "ReceiptNumber": "string",
    "SaleOverrides": "null",
    "TaxCalculationResult": {
      "Id": "string",
      "Lines": [
        "object"
      ]
    },
    "UserId": "number",
    "_created": "Date",
    "created_date_utc": "Date"
  },
  "app_orders_push_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "data": {
      "device_model": "string",
      "local_time": "string",
      "message": "string",
      "order_id": "string",
      "registration_id": "string"
    }
  },
  "woocommerce_customer": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "date_created": "string",
    "date_created_gmt": "string",
    "date_modified": "null",
    "date_modified_gmt": "null",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "role": "string",
    "username": "string",
    "billing": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "postcode": "string",
      "country": "string",
      "state": "string",
      "email": "string",
      "phone": "string"
    },
    "shipping": {
      "first_name": "string",
      "last_name": "string",
      "company": "string",
      "address_1": "string",
      "address_2": "string",
      "city": "string",
      "postcode": "string",
      "country": "string",
      "state": "string"
    },
    "is_paying_customer": "boolean",
    "avatar_url": "string",
    "meta_data": [
      {
        "id": "object",
        "key": "object",
        "value": "object"
      }
    ],
    "_links": {
      "self": [
        "object"
      ],
      "collection": [
        "object"
      ]
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "store_type": "string",
    "_created": "Date",
    "_updated": "Date",
    "mdb_id": {
      "buffer": "Buffer/Binary"
    },
    "clv": "number",
    "total_orders": "number",
    "bought_products": {},
    "last_order_date": "null",
    "payment_method_titles": [],
    "average_order_amount": "number",
    "pending_orders": "number",
    "processing_orders": "number",
    "on-hold_orders": "number",
    "completed_orders": "number",
    "cancelled_orders": "number",
    "refunded_orders": "number",
    "failed_orders": "number",
    "trash_orders": "number"
  },
  "birchmount_reedem_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "card": "string",
    "amount": "number",
    "_created": "Date",
    "_updated": "Date"
  },
  "shopify_collections": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "description": "string",
    "descriptionHtml": "string",
    "handle": "string",
    "id": "string",
    "image": "null",
    "legacyResourceId": "string",
    "productsCount": "number",
    "ruleSet": {
      "appliedDisjunctively": "boolean",
      "rules": [
        "object"
      ]
    },
    "seo": {
      "description": "null",
      "title": "null"
    },
    "sortOrder": "string",
    "templateSuffix": "null",
    "title": "string",
    "updatedAt": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "product_price_changed_to_chatso": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "parent_id": "number",
    "price": "number",
    "regular_price": "number",
    "sale_price": "number"
  },
  "budsense_variations_no_duplicated": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "location_id": "number",
    "barcode": "string",
    "_created": "Date",
    "_updated": "Date",
    "assets": "null",
    "brand": "string",
    "brandAssets": {
      "PrimaryBrand": [
        "object"
      ]
    },
    "cannabisUnitOfMeasure": "string",
    "cbd": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "classification": "string",
    "delisted": "boolean",
    "description": "string",
    "manufacturer": "string",
    "name": "string",
    "packagedQuantity": "number",
    "presentTerpenes": [
      "string"
    ],
    "productType": "string",
    "secondaryCannabinoids": "null",
    "shortDescription": "string",
    "strain": "string",
    "tac": "null",
    "terpeneUnitOfMeasure": "string",
    "thc": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "topTerpene": "string",
    "totalTerpene": "null",
    "unitOfMeasure": "string",
    "unitSize": "number",
    "variantType": "string",
    "sku": "string"
  },
  "of_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "timeCreated": "number",
    "timeLastModified": "number",
    "organization": "string",
    "shortId": "string",
    "trackingURL": "string",
    "worker": "null",
    "merchant": "string",
    "executor": "string",
    "creator": "string",
    "dependencies": [],
    "state": "number",
    "completeAfter": "null",
    "completeBefore": "null",
    "pickupTask": "boolean",
    "notes": "string",
    "completionDetails": {
      "failureNotes": "string",
      "failureReason": "string",
      "events": [],
      "actions": [],
      "time": "null",
      "firstLocation": [],
      "lastLocation": [],
      "unavailableAttachments": []
    },
    "feedback": [],
    "metadata": [
      {
        "visibility": "object",
        "name": "object",
        "type": "object",
        "value": "object"
      }
    ],
    "overrides": {
      "recipientName": "null",
      "recipientNotes": "null",
      "recipientSkipSMSNotifications": "null",
      "useMerchantForProxy": "null"
    },
    "quantity": "number",
    "additionalQuantities": {
      "quantityA": "number",
      "quantityB": "number",
      "quantityC": "number"
    },
    "serviceTime": "number",
    "identity": {
      "failedScanCount": "number",
      "checksum": "null"
    },
    "appearance": {
      "triangleColor": "null"
    },
    "scanOnlyRequiredBarcodes": "boolean",
    "requirements": {
      "signature": "boolean",
      "notes": "boolean",
      "photo": "boolean",
      "minimumAge": "number"
    },
    "container": {
      "type": "string",
      "organization": "string"
    },
    "trackingViewed": "boolean",
    "recipients": [
      {
        "id": "object",
        "timeCreated": "object",
        "timeLastModified": "object",
        "name": "object",
        "phone": "object",
        "notes": "object",
        "organization": "object",
        "skipSMSNotifications": "object",
        "metadata": "object"
      }
    ],
    "destination": {
      "id": "string",
      "timeCreated": "number",
      "timeLastModified": "number",
      "location": [
        "object"
      ],
      "address": {
        "apartment": "object",
        "state": "object",
        "postalCode": "object",
        "number": "object",
        "street": "object",
        "city": "object",
        "country": "object"
      },
      "notes": "string",
      "metadata": [],
      "googlePlaceId": "string",
      "warnings": []
    },
    "_created": "Date",
    "_updated": "Date",
    "org_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number"
  },
  "aeropay_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "topic": "string",
    "data": {
      "title": "string",
      "id": "string",
      "userId": "string",
      "attributes": [],
      "amount": "string",
      "apFee": "string",
      "uuid": "string",
      "merchantId": "string",
      "status": "string",
      "createdDate": "string",
      "locationId": "string",
      "paymentType": "string"
    },
    "date": "string",
    "url": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    }
  },
  "greenline_inventory_quantities": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "location_id": "number",
    "product_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "quantity": "number"
  },
  "homerun_webhooks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "api_key": "string",
    "ext_purchase_id": "string",
    "action": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "chatso_configs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "key": "string",
    "value": "string"
  },
  "chatso_tax_rates": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "object": "string",
    "active": "boolean",
    "country": "string",
    "created": "number",
    "description": "null",
    "display_name": "string",
    "inclusive": "boolean",
    "jurisdiction": "string",
    "livemode": "boolean",
    "metadata": {},
    "percentage": "number",
    "state": "string",
    "tax_type": "null"
  },
  "customer_notes": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "description": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "customer_id": "number",
    "operator_email": "string",
    "operator_name": "string",
    "source": "string"
  },
  "canfleet_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "org_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number",
    "task": {
      "expected_delivery_before": "string",
      "pickup_hub_id": "string",
      "pickup": {
        "name": "object",
        "phone": "object",
        "address_1": "object",
        "address_2": "object",
        "city": "object",
        "state": "object",
        "country": "object",
        "postcode": "object",
        "lng": "object",
        "lat": "object"
      },
      "delivery": {
        "name": "object",
        "phone": "object",
        "address_1": "object",
        "address_2": "object",
        "city": "object",
        "state": "object",
        "country": "object",
        "postcode": "object",
        "lng": "object",
        "lat": "object"
      },
      "barcode": "string",
      "note": "string",
      "requirements": {
        "photos": "object",
        "signature": "object"
      },
      "delivery_index": "null",
      "pickup_index": "null",
      "return_index": "null",
      "skip_pickup": "boolean",
      "contactless_delivery": "boolean",
      "metadata": {
        "bs_order_id": "object"
      },
      "executor_type": "null",
      "executor_id": "null",
      "executor_org_id": "string",
      "assigned_at": "null",
      "assigned_by": "null",
      "created_org_id": "string",
      "merchant_org_id": "string",
      "number": "number",
      "name": "string",
      "tracking_url": "string",
      "created_at": "string",
      "created_by": "string",
      "updated_at": "string",
      "status": "string",
      "distance": "number",
      "duration": "number",
      "id": "string"
    }
  },
  "woocommerce_points": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": "number",
    "points_balance": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "cova_catalog_stock": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "EntityId": "number",
    "Id": "string",
    "IsDropShippable": "null",
    "IsLot": "boolean",
    "IsSerialized": "boolean",
    "Quantity": "number",
    "SyncStatus": "number",
    "TotalQuantity": "number",
    "UnitId": "number",
    "UpdatedDateUtc": "string",
    "WooSyncStatus": "number"
  },
  "moneris_card_verifications": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "input": {
      "warehouse_id": "string",
      "payment_type": "string",
      "order_data": {
        "id": "object",
        "total": "object",
        "billing": "object"
      },
      "customer_data": {
        "id": "object"
      },
      "checkout_data": {
        "bs_mr_pf_exp_date_mm": "object",
        "bs_mr_pf_exp_date_yy": "object",
        "bs_mr_pf_postal_code": "object",
        "save_card": "object",
        "card_id": "object",
        "shipping_method": "object",
        "card_suffix": "object"
      }
    },
    "sale": {
      "ok": "boolean",
      "CardType": "string",
      "TransAmount": "string",
      "TxnNumber": "string",
      "ReceiptId": "string",
      "TransType": "string",
      "ReferenceNum": "string",
      "ResponseCode": "string",
      "ISO": "string",
      "Message": "string",
      "IsVisaDebit": "string",
      "AuthCode": "string",
      "Complete": "string",
      "TransDate": "string",
      "TransTime": "string",
      "Ticket": "string",
      "TimedOut": "string",
      "AVSResponse": "string",
      "CVDResponse": "string",
      "ITDResponse": "string",
      "IssuerId": "string",
      "CustID": "string"
    },
    "_created": "Date"
  },
  "atony": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "attributes": [
      {
        "name": "object",
        "options": "object"
      }
    ],
    "company_id": "number",
    "company_id2": "number",
    "company_id3": "number",
    "tonyname": "string"
  },
  "product_sync_state_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "count_done_products": "number",
    "count_syncing_products": "number",
    "count_updated_products": "number",
    "count_ignored_products": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date"
  },
  "cova_tax_category_temp": "empty",
  "shopify_products": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "availableForSale": "boolean",
    "barcode": "null",
    "compareAtPrice": "null",
    "createdAt": "string",
    "defaultCursor": "string",
    "displayName": "string",
    "id": "string",
    "image": "null",
    "inventoryPolicy": "string",
    "inventoryQuantity": "number",
    "legacyResourceId": "string",
    "position": "number",
    "price": "string",
    "product": {
      "createdAt": "string",
      "customProductType": "string",
      "defaultCursor": "string",
      "description": "string",
      "descriptionHtml": "string",
      "featuredImage": {
        "altText": "object",
        "height": "object",
        "id": "object",
        "url": "object",
        "width": "object"
      },
      "featuredMedia": {
        "preview": "object"
      },
      "giftCardTemplateSuffix": "null",
      "handle": "string",
      "hasOnlyDefaultVariant": "boolean",
      "hasOutOfStockVariants": "boolean",
      "id": "string",
      "isGiftCard": "boolean",
      "legacyResourceId": "string",
      "mediaCount": "number",
      "onlineStorePreviewUrl": "string",
      "onlineStoreUrl": "null",
      "priceRangeV2": {
        "maxVariantPrice": "object",
        "minVariantPrice": "object"
      },
      "productType": "string",
      "publishedAt": "string",
      "requiresSellingPlan": "boolean",
      "sellingPlanGroupCount": "number",
      "seo": {
        "description": "object",
        "title": "object"
      },
      "status": "string",
      "tags": [
        "object"
      ],
      "templateSuffix": "null",
      "title": "string",
      "totalInventory": "number",
      "totalVariants": "number",
      "tracksInventory": "boolean",
      "updatedAt": "string",
      "vendor": "string",
      "store_id": {
        "buffer": "object"
      },
      "_created": "Date",
      "_updated": "Date",
      "_id": {
        "buffer": "object"
      }
    },
    "selectedOptions": [
      {
        "name": "object",
        "value": "object"
      }
    ],
    "sellableOnlineQuantity": "number",
    "sellingPlanGroupCount": "number",
    "sku": "string",
    "taxCode": "string",
    "taxable": "boolean",
    "title": "string",
    "updatedAt": "string",
    "weight": "number",
    "weightUnit": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "is_variant": "boolean",
    "number_of_sales": "number"
  },
  "flowhub_inventories": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "cannabinoidInformation": [
      {
        "lowerRange": "object",
        "name": "object",
        "unitOfMeasure": "object",
        "unitOfMeasureToGramsMultiplier": "object",
        "upperRange": "object"
      }
    ],
    "costInMinorUnits": "number",
    "createdAt": "string",
    "currencyCode": "string",
    "erpId": "null",
    "erpName": "null",
    "expirationDate": "string",
    "for_sale_quantity": "number",
    "invoiceNumber": "null",
    "isStackable": "boolean",
    "locationId": "string",
    "manifestId": "null",
    "not_for_sale_quantity": "number",
    "nutrients": "null",
    "postTaxPriceInPennies": "number",
    "preTaxPriceInPennies": "number",
    "priceInMinorUnits": "number",
    "productId": "string",
    "productName": "string",
    "productUpdatedAt": "string",
    "purchaseCategory": "string",
    "regulatoryId": "string",
    "sku": "string",
    "supplierLicense": "string",
    "supplierName": "string",
    "terpenes": "null",
    "variantId": "string",
    "strainName": "string"
  },
  "nmipay_transaction_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "response": "string",
    "responsetext": "string",
    "response_code": "string",
    "three_ds_version": "string",
    "eci": "string",
    "directory_server_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "homerun_tasks": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "purchase_id": "number",
    "shopping_cart_id": "number",
    "product_amount": "string",
    "coupon_amount": "string",
    "promo_amount": "string",
    "drv_tip_amount": "string",
    "delivery_fee": "string",
    "hst_amount": "string",
    "processing_fee": "string",
    "total_amount": "string",
    "delivery_eta": "string",
    "status": "string",
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number"
  },
  "shopify_discount_automatics": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "__typename": "string",
    "asyncUsageCount": "number",
    "createdAt": "string",
    "endsAt": "string",
    "startsAt": "string",
    "status": "string",
    "summary": "string",
    "title": "string",
    "usesPerOrderLimit": "number",
    "customerBuys": {
      "items": {
        "__typename": "object"
      },
      "value": {
        "__typename": "object",
        "quantity": "object"
      }
    },
    "customerGets": {
      "appliesOnOneTimePurchase": "boolean",
      "appliesOnSubscription": "boolean",
      "items": {
        "__typename": "object"
      },
      "value": {
        "__typename": "object",
        "effect": "object",
        "quantity": "object"
      }
    },
    "id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "lightspeed_customer": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "company_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "average_order_amount": "number",
    "average_order_items": "number",
    "balance": "number",
    "bought_product_ids": [
      "string"
    ],
    "clv": "number",
    "company_name": "null",
    "completed_orders": "number",
    "created_at": "string",
    "custom_field_1": "null",
    "custom_field_2": "null",
    "custom_field_3": "null",
    "custom_field_4": "null",
    "customer_code": "string",
    "customer_group_id": "string",
    "customer_group_ids": [
      "string"
    ],
    "date_of_birth": "null",
    "deleted_at": "null",
    "do_not_email": "boolean",
    "email": "null",
    "enable_loyalty": "boolean",
    "fax": "null",
    "first_completed_order_date": "Date",
    "first_completed_order_date_at": {
      "0683d884-6097-11f0-e104-4ba998f4cb13": "Date",
      "067d4bf7-fc1b-11f0-f9ca-6cc8cb2c54a0": "Date"
    },
    "first_name": "null",
    "full_name": "string",
    "gender": "null",
    "last_name": "null",
    "last_order_date": "Date",
    "loyalty_balance": "number",
    "loyalty_email_sent": "boolean",
    "mobile": "null",
    "name": "null",
    "note": "null",
    "on_account_limit": "null",
    "payment_method_ids": [],
    "phone": "null",
    "physical_address_1": "null",
    "physical_address_2": "null",
    "physical_city": "null",
    "physical_country_id": "null",
    "physical_postcode": "null",
    "physical_state": "null",
    "physical_suburb": "null",
    "postal_address_1": "null",
    "postal_address_2": "null",
    "postal_city": "null",
    "postal_country_id": "null",
    "postal_postcode": "null",
    "postal_state": "null",
    "postal_suburb": "null",
    "purchase_location_ids": [
      "string"
    ],
    "source_unique_id": "null",
    "time_until_deletion": "null",
    "total_online_orders": "number",
    "total_order_items": "number",
    "total_orders": "number",
    "total_pos_orders": "number",
    "twitter": "null",
    "updated_at": "string",
    "version": "number",
    "website": "null",
    "year_to_date": "number"
  },
  "store_payments": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "api_value": "string",
    "warehouses": {}
  },
  "inventory_tags": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "name": "string",
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "description": "string",
    "count": "number",
    "_created": "Date",
    "_updated": "Date"
  },
  "greenline_discounts": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "number",
    "id": "number",
    "amount": "number",
    "applyDateRestriction": "boolean",
    "applyType": "string",
    "automatic": "boolean",
    "categories": [],
    "description": "string",
    "discountCode": "null",
    "endDate": "null",
    "endTime": "null",
    "friday": "boolean",
    "isLoyalty": "boolean",
    "isRecurring": "boolean",
    "locationIds": [
      "number"
    ],
    "loyaltyCost": "number",
    "loyaltyTierId": "null",
    "loyaltyTierName": "null",
    "loyaltyTiers": [],
    "monday": "boolean",
    "name": "string",
    "products": [
      {
        "discountId": "object",
        "id": "object",
        "parentProductId": "object",
        "name": "object",
        "type": "object"
      }
    ],
    "salesChannels": [],
    "saturday": "boolean",
    "startDate": "null",
    "startTime": "null",
    "sunday": "boolean",
    "thursday": "boolean",
    "tuesday": "boolean",
    "type": "string",
    "updateDate": "string",
    "wednesday": "boolean"
  },
  "store_interac_etransfers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "interac_etransfer_type": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "warehouse_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "connection": "boolean",
    "merchant_encryption_key": "string",
    "merchant_id": "string"
  },
  "greenline_brand": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "number",
    "name": "string",
    "_created": "Date",
    "_updated": "Date",
    "company_id": "number",
    "woo_mapping": {
      "id": "number"
    },
    "sync_status": "string"
  },
  "store_loyalties": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "loyalty_type": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "alpine_iq_api_key": "string",
    "alpine_iq_uid": "number",
    "connection": "boolean"
  },
  "cova_tax_rates": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CompanyId": "number",
    "Id": "string",
    "CalculatedOn": "string",
    "DisplayName": "null",
    "Layer": "number",
    "Locations": [
      "number"
    ],
    "Name": "string",
    "Rate": "number",
    "Type": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "budsense_variations": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "barcode": "string",
    "company_id": "string",
    "location_id": "number",
    "_created": "Date",
    "_updated": "Date",
    "assets": {
      "Product": [
        "object"
      ]
    },
    "brand": "string",
    "brandAssets": {
      "PrimaryBrand": [
        "object"
      ]
    },
    "cannabisUnitOfMeasure": "string",
    "cbd": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "classification": "string",
    "delisted": "boolean",
    "description": "string",
    "lineage": "string",
    "manufacturer": "string",
    "name": "string",
    "packagedQuantity": "number",
    "presentTerpenes": [
      "string"
    ],
    "productType": "string",
    "secondaryCannabinoids": "null",
    "shortDescription": "string",
    "sku": "string",
    "strain": "string",
    "tac": "null",
    "terpeneUnitOfMeasure": "string",
    "thc": {
      "min": "string",
      "max": "string",
      "avg": "string"
    },
    "topTerpene": "string",
    "totalTerpene": "null",
    "unitOfMeasure": "string",
    "unitSize": "number",
    "variantType": "string",
    "assetUrls": [
      {
        "small": "object",
        "large": "object"
      }
    ],
    "brandAssetUrls": [
      {
        "small": "object",
        "large": "object"
      }
    ]
  },
  "points_rewards_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "customer": "string",
    "date": "string",
    "date_display": "string",
    "description": "string",
    "id": "number",
    "points_balance": "number",
    "type": "string",
    "user_email": "string",
    "user_id": "number"
  },
  "cova_catalog_pricing": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "CatalogItemId": "string",
    "CompanyId": "number",
    "LocationId": "number",
    "AtTierPrice": "null",
    "EntityId": "number",
    "FromEntityId": "number",
    "GroupId": "null",
    "GroupName": "null",
    "Price": "number",
    "PricingGroup": "null",
    "PricingGroupId": "null",
    "PricingShelf": "null",
    "PricingShelfId": "null",
    "PricingTier": "null",
    "PricingTierId": "null",
    "ProductId": "string",
    "RegularPrice": "number",
    "SalePrices": [],
    "ShelfId": "null",
    "ShelfName": "null",
    "TierId": "null",
    "TierName": "null",
    "TierQuantity": "null",
    "UpdatedDateUtc": "string",
    "_created": "Date",
    "_updated": "Date"
  },
  "system_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "order_id": "number",
    "log": {
      "msg": "string",
      "new_order": {
        "store_id": "object",
        "_created": "object",
        "_updated": "object",
        "total_value": "object",
        "total_items": "object",
        "_links": "object",
        "id": "object",
        "parent_id": "object",
        "number": "object",
        "order_key": "object",
        "created_via": "object",
        "version": "object",
        "status": "object",
        "currency": "object",
        "date_created": "object",
        "date_created_gmt": "object",
        "date_modified": "object",
        "date_modified_gmt": "object",
        "discount_total": "object",
        "discount_tax": "object",
        "shipping_total": "object",
        "shipping_tax": "object",
        "cart_tax": "object",
        "total": "object",
        "total_tax": "object",
        "prices_include_tax": "object",
        "customer_id": "object",
        "customer_ip_address": "object",
        "customer_user_agent": "object",
        "customer_note": "object",
        "billing": "object",
        "shipping": "object",
        "payment_method": "object",
        "payment_method_title": "object",
        "transaction_id": "object",
        "date_paid": "object",
        "date_paid_gmt": "object",
        "date_completed": "object",
        "date_completed_gmt": "object",
        "cart_hash": "object",
        "meta_data": "object",
        "line_items": "object",
        "tax_lines": "object",
        "shipping_lines": "object",
        "fee_lines": "object",
        "coupon_lines": "object",
        "refunds": "object",
        "failed_note": "object",
        "categories": "object"
      }
    },
    "type": "string",
    "level": "number"
  },
  "shopify_customers": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "addresses": [
      {
        "address1": "object",
        "address2": "object",
        "city": "object",
        "company": "object",
        "country": "object",
        "countryCodeV2": "object",
        "firstName": "object",
        "formatted": "object",
        "formattedArea": "object",
        "id": "object",
        "lastName": "object",
        "latitude": "object",
        "longitude": "object",
        "name": "object",
        "phone": "object",
        "province": "object",
        "provinceCode": "object",
        "zip": "object"
      }
    ],
    "amountSpent": {
      "amount": "string",
      "currencyCode": "string"
    },
    "averageOrderAmountV2": {
      "amount": "string",
      "currencyCode": "string"
    },
    "canDelete": "boolean",
    "createdAt": "string",
    "defaultAddress": {
      "address1": "string",
      "address2": "null",
      "city": "string",
      "company": "string",
      "country": "string",
      "countryCodeV2": "string",
      "firstName": "string",
      "formatted": [
        "object"
      ],
      "formattedArea": "string",
      "id": "string",
      "lastName": "string",
      "latitude": "null",
      "longitude": "null",
      "name": "string",
      "phone": "null",
      "province": "null",
      "provinceCode": "null",
      "zip": "string"
    },
    "displayName": "string",
    "email": "string",
    "emailMarketingConsent": {
      "consentUpdatedAt": "null",
      "marketingOptInLevel": "string",
      "marketingState": "string"
    },
    "firstName": "string",
    "hasTimelineComment": "boolean",
    "id": "string",
    "image": {
      "altText": "null",
      "height": "null",
      "id": "null",
      "url": "string",
      "width": "null"
    },
    "lastName": "string",
    "lastOrder": {
      "id": "string",
      "createdAt": "string"
    },
    "legacyResourceId": "string",
    "lifetimeDuration": "string",
    "locale": "string",
    "multipassIdentifier": "null",
    "note": "string",
    "numberOfOrders": "string",
    "phone": "string",
    "productSubscriberStatus": "string",
    "smsMarketingConsent": {
      "consentCollectedFrom": "string",
      "consentUpdatedAt": "null",
      "marketingOptInLevel": "string",
      "marketingState": "string"
    },
    "state": "string",
    "tags": [
      "string"
    ],
    "taxExempt": "boolean",
    "taxExemptions": [],
    "unsubscribeUrl": "string",
    "updatedAt": "string",
    "validEmailAddress": "boolean",
    "verifiedEmail": "boolean",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date",
    "numberOfOrders_number": "number",
    "amountSpent_number": "number"
  },
  "lightspeed_payment_type": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "company_id": "string",
    "id": "string",
    "_created": "Date",
    "_updated": "Date",
    "config": "null",
    "created_at": "string",
    "deleted_at": "null",
    "disabled": "boolean",
    "gateway": "boolean",
    "internal": "boolean",
    "name": "string",
    "name_changed_by_user": "boolean",
    "outlet_ids": "null",
    "payment_type": {
      "id": "number",
      "name": "string",
      "header": "null",
      "description": "null",
      "logo": "null",
      "badge": "null",
      "internal": "boolean",
      "platforms": "null",
      "category": "string",
      "subcategory": "string",
      "subtext": "null",
      "configuration_url": "null",
      "referred_inactive": "boolean",
      "show_banner": "boolean",
      "online_only": "boolean"
    },
    "type_id": "number",
    "version": "number"
  },
  "organization_users": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "organization_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "assigned_stores": [],
    "invited_at": "null",
    "invited_by": "null",
    "is_ga": "boolean",
    "is_owner": "boolean",
    "joined_at": "Date",
    "user_email": "string",
    "cs_ws_id": "string"
  },
  "unify_notifications": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "userId": "string",
    "serviceId": "string",
    "title": "string",
    "message": "string",
    "type": "string",
    "subType": "string",
    "priority": "string",
    "channels": {
      "sse": {
        "status": "object",
        "error": "object",
        "lastAttemptAt": "object",
        "attempts": "object"
      }
    },
    "metadata": {
      "url": "string"
    },
    "isRead": "boolean",
    "__v": "number",
    "createdAt": "Date",
    "updatedAt": "Date"
  },
  "cova_budtender": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "id": "number",
    "location_id": "number",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "number_of_orders": "number",
    "revenue": "number"
  },
  "cova_catalog_stock_temp": "empty",
  "shopify_collection_product": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "collection_id": "string",
    "product_id": "string",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "_created": "Date",
    "_updated": "Date"
  },
  "greenline_update_woo_quantity_from_webhooks": "empty",
  "lightspeed_inventory": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "product_id": "string",
    "company_id": "string",
    "outlet_id": "string",
    "_created": "Date",
    "_updated": "Date",
    "average_cost": "number",
    "current_amount": "number",
    "deleted_at": "null",
    "id": "string",
    "inventory_level": "number",
    "reorder_amount": "number",
    "reorder_point": "number",
    "version": "number",
    "attributed_cost": "string",
    "count": "number",
    "outlet": {
      "id": "string",
      "name": "string",
      "tax_id": "string",
      "time_zone": "string"
    },
    "product": {
      "active": "boolean",
      "attributed_cost": "null",
      "base_name": "string",
      "button_order": "number",
      "categories": [],
      "deleted_at": "null",
      "description": "string",
      "handle": "string",
      "id": "string",
      "name": "string",
      "sku": "string",
      "source": "string",
      "source_id": "null",
      "source_variant_id": "null",
      "supply_price": "string",
      "taxes": [
        "object"
      ],
      "variant_options": [
        "object"
      ],
      "variant_parent_id": "string"
    },
    "restock_level": "string"
  },
  "woocommerce_products": "empty",
  "flowhub_statistic_inventory_quantity_daily": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "date": "Date",
    "company_id": "string",
    "location_id": "string",
    "product_id": "string",
    "quantity": "number"
  },
  "lightspeed_tax": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "id": "string",
    "name": "string",
    "version": "number",
    "deleted_at": "null",
    "rates": [
      {
        "id": "object",
        "name": "object",
        "rate": "object",
        "rules": "object",
        "display_name": "object"
      }
    ],
    "is_default": "boolean",
    "display_name": "string",
    "_created": "Date",
    "_updated": "Date",
    "company_id": "string",
    "woo_mapping": {
      "id": "string",
      "rates": {}
    },
    "sync_status": "string"
  },
  "promotion_logs": {
    "_id": {
      "buffer": "Buffer/Binary"
    },
    "promotion_id": {
      "buffer": "Buffer/Binary"
    },
    "user_id": {
      "buffer": "Buffer/Binary"
    },
    "type_": "string",
    "previous": "null",
    "current": {
      "_id": {
        "buffer": "object"
      },
      "name": "string",
      "frequency": [],
      "start_date": "string",
      "end_date": "string",
      "start_time": "string",
      "end_time": "string",
      "global_discount": "null",
      "product_type": "string",
      "all_products": {
        "discount_amount": "object",
        "discount_type": "object"
      },
      "products": {},
      "brands": {},
      "categories": {},
      "status": "number",
      "datetime_started_gmt": "null",
      "datetime_ended_gmt": "null",
      "number_of_products_sold": "number",
      "number_of_orders": "number",
      "sale": "number",
      "profit": "number",
      "number_of_products_sold_detail": {
        "products": "object",
        "brands": "object",
        "categories": "object"
      },
      "_created": "Date",
      "_updated": "Date",
      "store_id": {
        "buffer": "object"
      }
    },
    "_created": "Date",
    "_updated": "Date",
    "store_id": {
      "buffer": "Buffer/Binary"
    },
    "users_viewed": [
      "string"
    ]
  }
}
