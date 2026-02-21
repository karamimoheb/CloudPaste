export default {
  storage: {
    // عمومی
    item: "این پیکربندی ذخیره‌سازی",

    // نمایش نوع ذخیره‌سازی
    type: {
      s3: "سازگار با S3",
      webdav: "WebDAV",
      local: "فایل محلی",
      onedrive: "OneDrive",
      googledrive: "Google Drive",
      github_releases: "GitHub Releases",
      github_api: "GitHub API",
      telegram: "Telegram Bot API",
      discord: "Discord Bot API",
      huggingface_datasets: "HuggingFace Datasets",
      mirror: "Mirror منبع",
    },

    // عنوان گروه‌ها
    groups: {
      basic: "پیکربندی پایه",
      connection: "پیکربندی اتصال",
      credentials: "پیکربندی اعتبارنامه",
      permissions: "تنظیمات دسترسی",
      advanced: "گزینه‌های پیشرفته",
      options: "سایر گزینه‌ها",
      behaviour: "پیکربندی رفتار",
    },

    // برچسب فیلدهای عمومی
    fields: {
      name: "نام پیکربندی",
      storage_type: "نوع ذخیره‌سازی",
      provider_type: "ارائه‌دهنده سرویس",
      endpoint_url: "آدرس Endpoint",
      bucket_name: "نام Bucket",
      region: "ناحیه",
      access_key_id: "Access Key ID",
      secret_access_key: "Access Key Secret",
      path_style: "سبک مسیر",
      default_folder: "پوشه پیش‌فرض آپلود",
      custom_host: "Host سفارشی",
      url_proxy: "URL پراکسی",
      signature_expires_in: "مدت اعتبار امضا (ثانیه)",
      is_public: "اجازه استفاده از کلید API",
      username: "نام کاربری",
      password: "رمز عبور",
      tls_insecure_skip_verify: "رد کردن بررسی گواهی TLS",

      // S3 خاص
      s3: {
        multipart_part_size_mb: "اندازه قطعه (MB)",
        multipart_concurrency: "تعداد همزمانی آپلود قطعه‌ها",
      },

      // LOCAL خاص
      local: {
        root_path: "مسیر ریشه محلی",
        auto_create_root: "ایجاد خودکار ریشه",
        readonly: "حالت فقط‌خواندنی",
        enable_disk_usage: "فعال‌سازی خواندن سهمیه دیسک",
        trash_path: "مسیر سطل زباله",
        dir_permission: "مجوز پوشه/فایل",
      },

      // OneDrive خاص
      onedrive: {
        region: "ناحیه",
        client_id: "Client ID",
        client_secret: "Client Secret",
        refresh_token: "Refresh Token",
        token_renew_endpoint: "Endpoint تمدید Token",
        redirect_uri: "آدرس Callback",
        use_online_api: "نوع API",
        enable_disk_usage: "فعال‌سازی خواندن سهمیه",
        oauth_status: "وضعیت احراز هویت",
      },

      // Google Drive خاص
      googledrive: {
        use_online_api: "نوع API",
        endpoint_url: "Endpoint تمدید Token",
        client_id: "Client ID",
        client_secret: "Client Secret",
        refresh_token: "Refresh Token / URL ریموت Service Account JSON",
        root_id: "شناسه پوشه ریشه",
        enable_disk_usage: "فعال‌سازی خواندن سهمیه",
        enable_shared_view: "نمای SharedWithMe",
      },

      // WebDAV خاص
      webdav: {
        enable_disk_usage: "فعال‌سازی خواندن سهمیه",
      },

      // GitHub Releases
      github_releases: {
        repo_structure: "قانون نگاشت مخزن",
        show_all_version: "نمایش تمام نسخه‌ها",
        show_source_code: "نمایش Source code فشرده",
        show_readme: "نمایش README / LICENSE",
        show_release_notes: "نمایش Release Notes",
        per_page: "تعداد نسخه‌های دریافت‌شده در هر درخواست",
        gh_proxy: "آدرس پراکسی GitHub",
        token: "توکن دسترسی GitHub",
      },

      // GitHub API
      github_api: {
        owner: "مالک مخزن (owner)",
        repo: "نام مخزن (repo)",
        ref: "مرجع (branch/tag/commit)",
        endpoint_url: "Base API GitHub",
        gh_proxy: "آدرس پراکسی GitHub",
        committer_name: "نام committer",
        committer_email: "ایمیل committer",
        author_name: "نام نویسنده",
        author_email: "ایمیل نویسنده",
        token: "توکن دسترسی GitHub",
      },

      // Telegram
      telegram: {
        bot_token: "Bot Token",
        target_chat_id: "Chat ID مقصد",
        endpoint_url: "آدرس API بات",
        bot_api_mode: "حالت API بات",
        part_size_mb: "اندازه قطعه (MB)",
        upload_concurrency: "همزمانی آپلود",
        verify_after_upload: "اعتبارسنجی پس از آپلود",
      },

      // Discord
      discord: {
        bot_token: "Bot Token",
        channel_id: "Channel ID",
        endpoint_url: "آدرس Base API",
        part_size_mb: "اندازه قطعه (MB)",
        upload_concurrency: "همزمانی آپلود",
      },

      // HuggingFace
      huggingface_datasets: {
        repo: "مخزن Dataset",
        revision: "شاخه / نسخه",
        endpoint_url: "آدرس Hub",
        hf_token: "توکن HF",
        hf_use_paths_info: "نمایش اطلاعات بیشتر",
        hf_tree_limit: "حداکثر تعداد لیست پوشه",
        hf_multipart_concurrency: "همزمانی آپلود قطعه",
        hf_use_xet: "استفاده از Xet",
        hf_delete_lfs_on_remove: "حذف فایل LFS هنگام حذف فایل",
      },

      // Mirror
      mirror: {
        preset: "قالب پیش‌فرض Mirror",
        endpoint_url: "آدرس ریشه Mirror",
        max_entries: "حداکثر تعداد ورودی",
      },
    },

    // مقدار نمایش کارت
    display: {
      path_style: {
        path: "سبک مسیر",
        virtual_host: "سبک میزبان مجازی",
      },
      default_folder: {
        root: "ریشه",
      },
      onedrive: {
        use_online_api: {
          enabled: "Online API",
          disabled: "API استاندارد",
        },
      },
      googledrive: {
        use_online_api: {
          enabled: "Online API",
          disabled: "API استاندارد",
        },
        enable_shared_view: {
          enabled: "فعال",
          disabled: "غیرفعال",
        },
      },
    },

    // ارائه‌دهندگان S3
    s3: {
      provider: {
        cloudflare_r2: "Cloudflare R2",
        backblaze_b2: "Backblaze B2",
        aws_s3: "AWS S3",
        aliyun_oss: "Alibaba OSS",
        other: "سایر سرویس‌های سازگار با S3",
      },
    },

    // منطقه OneDrive
    onedrive: {
      region: {
        global: "نسخه بین‌المللی (Global)",
        cn: "نسخه چین (CN)",
        us: "نسخه دولت آمریکا (US Gov)",
        de: "نسخه آلمان (Germany)",
      },
    },
  },
};
