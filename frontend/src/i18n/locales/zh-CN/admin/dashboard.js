export default {
  dashboard: {
    systemOverview: "نمای کلی سیستم",
    refresh: "تازه‌سازی",
    refreshing: "در حال تازه‌سازی...",
    refreshStorage: "تازه‌سازی ذخیره‌سازی",
    refreshingStorage: "در حال تازه‌سازی...",
    refreshStorageTooltip: "محاسبه مجدد میزان استفاده از تمام پیکربندی‌های ذخیره‌سازی",
    fetchError: "دریافت داده ناموفق بود",
    loading: "در حال بارگذاری...",
    error: "بارگذاری ناموفق بود",

    // 统计卡片
    totalPastes: "اشتراک متن",
    totalFiles: "آپلود فایل",
    totalApiKeys: "کلید API",
    totalStorageConfigs: "پیکربندی ذخیره‌سازی",
    totalStorageUsed: "مصرف ذخیره‌سازی",

    // 缓存监控
    cacheMonitoring: "مانیتورینگ کش",
    directoryCache: "کش پوشه",
    urlCache: "کش URL",
    searchCache: "کش جستجو",
    hitRate: "نرخ موفقیت",
    cacheItems: "آیتم‌های کش",
    cacheUnavailable: "داده کش در دسترس نیست",
    clearAllCache: "پاک‌سازی تمام کش",

    // 存储相关
    storageUsage: "وضعیت استفاده از ذخیره‌سازی (استفاده‌شده/محدودیت)",
    storageConfigs: "پیکربندی‌های ذخیره‌سازی",
    noStorageConfigs: "هیچ پیکربندی ذخیره‌سازی وجود ندارد",
    allStorages: "تمام ذخیره‌سازی‌ها",
    selectStorage: "انتخاب ذخیره‌سازی",
    usagePercent: "درصد استفاده",
    availableStorage: "فضای در دسترس",
    usedStorage: "فضای استفاده‌شده",
    remaining: "باقی‌مانده",
    total: "ظرفیت کل",
    used: "استفاده‌شده",
    available: "در دسترس",
    unlimited: "بدون محدودیت",
    configs: "پیکربندی",
    exceeded: "از حد عبور کرده",

    // 存储详情
    showDetails: "مشاهده جزئیات",
    hideDetails: "پنهان کردن جزئیات",
    providerQuota: "مصرف سرویس بالادستی (کل/استفاده‌شده)",
    quotaSnapshot: "اسنپ‌شات سهمیه",
    snapshotInfo: "اطلاعات اسنپ‌شات",
    snapshotTime: "آخرین اسنپ‌شات",
    latestSnapshot: "جدیدترین اسنپ‌شات",
    clickToViewList: "برای مشاهده لیست کلیک کنید",
    totalItems: "مجموع {count} مورد",

    // 数据来源标签
    sourceLabels: {
      provider: "داده سرویس بالادستی",
      localFs: "اسکن دیسک",
      vfsNodes: "فایل مجازی",
      fsIndex: "ایندکس فایل",
      unknown: "منبع نامشخص",
    },

    // 数据来源描述
    sourceDescriptions: {
      provider: "داده از طریق API سهمیه بومی درایور ذخیره‌سازی",
      localFs: "محاسبه از طریق اسکن دایرکتوری دیسک محلی",
      vfsNodes: "آمارگیری بر اساس گره‌های سیستم فایل مجازی",
      fsIndex: "آمارگیری بر اساس رکوردهای ایندکس فایل",
    },

    storageUnits: {
      bytes: "بایت",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB",
    },

    // 图表相关
    chartTitle: "آمار فعالیت 7 روز گذشته",
    chartType: {
      bar: "نمودار میله‌ای",
      line: "نمودار خطی",
      toggle: "تغییر نوع نمودار",
    },
    weeklyStats: "آمار این هفته",
    weeklyActivity: "فعالیت هفتگی",
    weeklyPastes: "متن‌های هفتگی",
    weeklyFiles: "فایل‌های هفتگی",
    mostActiveDate: "پرترافیک‌ترین روز",
    highestDailyActivity: "بیشترین فعالیت روزانه",
    activityOverview: "نمای کلی فعالیت",
    items: "مورد",
    switchToLineChart: "تغییر به نمودار خطی",
    switchToBarChart: "تغییر به نمودار میله‌ای",
    dailyActivity: "فعالیت روزانه",
    noData: "داده‌ای موجود نیست",

    // 时间相关
    lastUpdated: "آخرین به‌روزرسانی",
    timeAgo: "{time} پیش",
    justNow: "همین الان",

    // 存储类型
    storageTypeDistribution: "توزیع نوع ذخیره‌سازی",

    // 状态信息
    status: {
      healthy: "سالم",
      warning: "هشدار",
      error: "خطا",
      offline: "آفلاین",
    },

    // 操作按钮
    actions: {
      viewDetails: "مشاهده جزئیات",
      manage: "مدیریت",
      configure: "تنظیم",
      export: "خروجی گرفتن",
    },

    // 系统信息
    systemVersion: "نسخه سیستم",
    serverEnvironment: "محیط سرور",
    dataStorage: "ذخیره‌سازی داده",

    // 提示信息
    tips: {
      noApiKeys: "هنوز هیچ کلید API ایجاد نشده است",
      noStorageConfigs: "هنوز ذخیره‌سازی پیکربندی نشده است",
      noActivity: "فعالیتی اخیراً ثبت نشده است",
      lowStorage: "فضای ذخیره‌سازی کم است",
    },
  },
};
