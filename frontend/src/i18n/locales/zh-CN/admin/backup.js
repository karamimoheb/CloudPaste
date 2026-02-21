export default {
  backup: {
    title: "پشتیبان‌گیری و بازیابی داده‌ها",
    subtitle: "مدیریت عملیات پشتیبان‌گیری و بازیابی داده‌های سیستم",
    operationLogs: "گزارش عملیات",

    // 备份操作
    backupOperations: {
      title: "عملیات پشتیبان‌گیری",
      backupType: "نوع پشتیبان‌گیری:",
      fullBackup: {
        title: "پشتیبان‌گیری کامل",
        description: "پشتیبان‌گیری از تمامی داده‌ها و تنظیمات (پیشنهادی)",
      },
      moduleBackup: {
        title: "پشتیبان‌گیری انتخابی ماژول‌ها",
        description: "انتخاب ماژول‌های خاص برای پشتیبان‌گیری",
      },
      selectModules: "ماژول‌های موردنظر برای پشتیبان‌گیری را انتخاب کنید:",
      selectedModules: "{count} ماژول انتخاب شده است",
      createBackup: "ایجاد پشتیبان",
      creating: "در حال ایجاد...",
    },

    // 恢复操作
    restoreOperations: {
      title: "عملیات بازیابی",
      selectFile: "انتخاب فایل پشتیبان",
      restoreMode: "حالت بازیابی:",
      overwriteMode: "بازنویسی",
      mergeMode: "ادغام",
      executeRestore: "اجرای بازیابی",
      restoring: "در حال بازیابی...",
    },

    // 模块定义
    modules: {
      text_management: {
        name: "مدیریت متن",
        description: "داده‌ها و رمزهای اشتراک‌گذاری متن",
      },
      file_management: {
        name: "مدیریت فایل",
        description: "داده‌ها و رمزهای اشتراک‌گذاری فایل",
      },
      mount_management: {
        name: "مدیریت نقاط اتصال",
        description: "تنظیمات نقاط اتصال ذخیره‌سازی",
      },
      storage_config: {
        name: "مدیریت تنظیمات ذخیره‌سازی",
        description: "اطلاعات تنظیمات ذخیره‌سازی و کنترل دسترسی",
      },
      key_management: {
        name: "مدیریت کلیدها",
        description: "مدیریت کلیدهای API",
      },
      account_management: {
        name: "مدیریت حساب‌ها",
        description: "حساب‌های مدیر و توکن‌ها",
      },
      system_settings: {
        name: "تنظیمات سیستم",
        description: "تنظیمات کلی سیستم",
      },
      fs_meta_management: {
        name: "مدیریت فراداده پوشه‌ها",
        description: "تنظیمات فراداده پوشه‌ها",
      },
      task_management: {
        name: "مدیریت وظایف",
        description: "سوابق اجرا و وضعیت وظایف ناهمگام",
      },
      upload_sessions: {
        name: "مدیریت نشست‌های بارگذاری تکه‌ای",
        description: "سوابق و وضعیت نشست‌های بارگذاری تکه‌ای"
      },
      vfs_management: {
        name: "مدیریت درخت پوشه مجازی",
        description: "نمایه درخت پوشه مجازی. پیشنهاد می‌شود همراه با «تنظیمات ذخیره‌سازی» و «مدیریت نقاط اتصال» پشتیبان‌گیری شود",
      },
    },

    // 日志和状态消息
    logs: {
      startFullBackup: "شروع ایجاد پشتیبان کامل...",
      startModuleBackup: "شروع ایجاد پشتیبان ماژول‌ها ({count} ماژول)...",
      backupFileParsed: "فایل پشتیبان با موفقیت تجزیه شد (محلی)",
      previewStart: "شروع پیش‌بررسی (حالت {mode})...",
      previewPassed: "پیش‌بررسی با موفقیت انجام شد، می‌توان بازیابی را آغاز کرد",
      previewFailed: "در پیش‌بررسی مشکلی یافت شد، بازیابی لغو شد",
      previewIssue: "مشکل پیش‌بررسی: {message}",
      previewIssueUnknown: "مشکل ناشناخته",
      previewBlockedRestore: "به دلیل عدم موفقیت پیش‌بررسی، اجرای بازیابی متوقف شد",
      previewIntegrityIssues: "هشدار پیش‌بررسی: {count} مشکل احتمالی یکپارچگی داده یافت شد",
      restoreIntegrityIssues: "هشدار بازیابی: {count} مشکل یکپارچگی داده یافت شد",
      serverWarning: "هشدار: {message}",
      startRestore: "شروع اجرای بازیابی (حالت {mode})...",
      backupComplete: "ایجاد پشتیبان کامل شد، در مجموع {count} رکورد صادر شد",
      moduleBackupComplete: "پشتیبان ماژول‌ها کامل شد، در مجموع {count} رکورد صادر شد",
      downloadStarted: "دانلود فایل پشتیبان آغاز شد",
      restoreComplete: "بازیابی داده‌ها کامل شد، {added} رکورد افزوده شد و {ignored} رکورد تکراری نادیده گرفته شد",
      restoreCompleteOverwrite: "بازیابی داده‌ها کامل شد، در مجموع {count} رکورد بازیابی شد",
      tableExported: "جدول {table}: تعداد {count} رکورد صادر شد",
      tableRestored: "جدول {table}: {added} افزوده شد، {ignored} نادیده گرفته شد، {expected} مورد انتظار (بخشی از قبل موجود بود)",
      tableRestoredOverwrite: "جدول {table}: {success} موفق، {expected} مورد انتظار",
      gettingModuleInfo: "در حال دریافت اطلاعات ماژول...",
      moduleInfoSuccess: "اطلاعات ماژول با موفقیت دریافت شد",
      recordsCount: "{count} رکورد",
      clearLogs: "پاک کردن گزارش‌ها",
    },

    // 错误消息
    errors: {
      selectAtLeastOneModule: "لطفاً حداقل یک ماژول را انتخاب کنید",
      getModuleInfoFailed: "دریافت اطلاعات ماژول ناموفق بود: {error}",
      backupFailed: "ایجاد پشتیبان ناموفق بود: {error}",
      restoreFailed: "بازیابی داده‌ها ناموفق بود: {error}",
      fileSelectRequired: "لطفاً ابتدا فایل پشتیبان را انتخاب کنید",
      invalidBackupFile: "فرمت فایل پشتیبان نامعتبر است",
      parseBackupFailed: "تجزیه فایل پشتیبان ناموفق بود: {error}",
    },

    // 成功消息
    success: {
      backupCreated: "پشتیبان با موفقیت ایجاد شد",
      dataRestored: "داده‌ها با موفقیت بازیابی شدند",
    },

    // 确认对话框
    confirmations: {
      restoreOverwrite: "حالت بازنویسی داده‌های موجود را جایگزین می‌کند و این عملیات قابل بازگشت نیست. آیا مطمئن هستید که ادامه می‌دهید؟",
      restoreMerge: "حالت ادغام داده‌های موجود را حفظ کرده و داده‌های جدید را اضافه می‌کند. آیا مطمئن هستید که ادامه می‌دهید؟",
    },
  },
};
