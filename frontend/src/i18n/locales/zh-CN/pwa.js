export default {
  pwa: {
    // 状态指示器
    status: {
      title: "جزئیات وضعیت PWA",
      offline: "حالت آفلاین",
      updateAvailable: "نسخه جدید موجود است",
      updating: "در حال به‌روزرسانی",
      installable: "قابل نصب",
      ready: "PWA آماده است",
    },

    // 状态标签
    labels: {
      networkStatus: "وضعیت شبکه",
      installStatus: "وضعیت نصب",
      serviceWorker: "Service Worker",
      updateStatus: "وضعیت به‌روزرسانی",
      notificationPermission: "مجوز اعلان",
      backgroundSync: "همگام‌سازی پس‌زمینه",
      appVersion: "نسخه برنامه",
    },

    // 网络状态
    network: {
      online: "آنلاین",
      offline: "آفلاین",
    },

    // 安装状态
    install: {
      installed: "نصب شده",
      notInstalled: "نصب نشده",
      installable: "قابل نصب",
      installing: "در حال نصب",
      installApp: "نصب برنامه",
      installPrompt: "CloudPaste را به صفحه اصلی اضافه کنید تا تجربه بهتری داشته باشید",
    },

    // Service Worker 状态
    serviceWorker: {
      unknown: "نامشخص",
      installing: "در حال نصب",
      waiting: "در انتظار",
      active: "فعال",
      redundant: "منسوخ شده",
    },

    // 更新状态
    update: {
      latest: "آخرین نسخه",
      available: "به‌روزرسانی موجود است",
      updating: "در حال به‌روزرسانی",
      updateApp: "به‌روزرسانی فوری",
      checkUpdate: "بررسی به‌روزرسانی",
      checking: "در حال بررسی",
      updatePrompt: "نسخه جدیدی یافت شد، برای دریافت قابلیت‌های جدید به‌روزرسانی کنید",
      updateSuccess: "به‌روزرسانی با موفقیت انجام شد",
      updateFailed: "به‌روزرسانی ناموفق بود",
    },

    // 通知权限
    notification: {
      default: "تنظیم نشده",
      granted: "مجاز",
      denied: "رد شده",
      enable: "فعال‌سازی اعلان‌ها",
      requesting: "در حال درخواست",
      requestFailed: "درخواست مجوز اعلان ناموفق بود",
    },

    // 后台同步
    backgroundSync: {
      supported: "پشتیبانی می‌شود",
      notSupported: "پشتیبانی نمی‌شود",
      syncing: "در حال همگام‌سازی",
      syncComplete: "همگام‌سازی کامل شد",
      syncFailed: "همگام‌سازی ناموفق بود",
    },

    // 离线提示
    offline: {
      message: "شما آفلاین هستید، ممکن است برخی قابلیت‌ها محدود باشند",
      restored: "اتصال شبکه برقرار شد، در حال همگام‌سازی داده‌ها...",
      pageUnavailable: "{page} موقتاً در دسترس نیست، لطفاً اتصال شبکه را بررسی کنید",
    },

    // 安装提示
    installPrompt: {
      title: "نصب برنامه",
      message: "CloudPaste را به صفحه اصلی اضافه کنید تا تجربه بهتری داشته باشید",
      install: "نصب",
      later: "بعداً",
      dismiss: "بعداً",
    },

    // 更新提示
    updatePrompt: {
      title: "نسخه جدید در دسترس است",
      message: "نسخه جدیدی یافت شد، برای دریافت قابلیت‌های جدید به‌روزرسانی کنید",
      update: "به‌روزرسانی",
      later: "بعداً",
      dismiss: "بعداً",
    },

    // 操作按钮
    actions: {
      install: "نصب",
      update: "به‌روزرسانی",
      checkUpdate: "بررسی به‌روزرسانی",
      enableNotification: "فعال‌سازی اعلان‌ها",
      close: "بستن",
      later: "بعداً",
      dismiss: "بعداً",
    },

    // 错误消息
    errors: {
      installFailed: "نصب ناموفق بود",
      updateFailed: "به‌روزرسانی ناموفق بود",
      notificationFailed: "درخواست مجوز اعلان ناموفق بود",
      syncFailed: "همگام‌سازی داده‌ها ناموفق بود، لطفاً بعداً دوباره تلاش کنید",
      notSupported: "مرورگر شما از این قابلیت پشتیبانی نمی‌کند",
    },

    // 成功消息
    success: {
      installed: "برنامه با موفقیت نصب شد",
      updated: "برنامه به آخرین نسخه به‌روزرسانی شد",
      notificationEnabled: "مجوز اعلان فعال شد",
      syncComplete: "همگام‌سازی داده‌ها کامل شد",
    },
  },
};
