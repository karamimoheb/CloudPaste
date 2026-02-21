export default {
  tasks: {
    title: 'وظایف و عملیات',
    description: 'مشاهده و مدیریت تمام وظایف پس‌زمینه سیستم',
    loading: 'در حال بارگذاری...',

    viewMode: {
      table: 'نمای جدولی',
      card: 'نمای کارت',
    },

    filters: {
      searchPlaceholder: 'جستجوی نام وظیفه، شناسه یا مسیر...',
      allStatuses: 'همه وضعیت‌ها',
      allTypes: 'همه انواع',
      allCreators: 'همه ایجادکنندگان',
      allTriggers: 'همه روش‌های اجرا',
    },

    list: {
      title: 'لیست وظایف',
    },

    table: {
      name: 'نام',
      creator: 'ایجادکننده',
      status: 'وضعیت',
      progress: 'آمار / پیشرفت',
      actions: 'عملیات',
      details: 'جزئیات وظیفه',
      createdAt: 'زمان ایجاد',
    },

    status: {
      pending: 'در انتظار',
      running: 'در حال اجرا',
      completed: 'تکمیل شده',
      failed: 'ناموفق',
      cancelled: 'لغو شده',
      partial: 'نیمه‌کامل',
    },

    actions: {
      refresh: 'تازه‌سازی',
      cancel: 'لغو وظیفه',
      expandAll: 'باز کردن همه',
      collapseAll: 'بستن همه',
      delete: 'حذف وظیفه',
      deleteShort: 'حذف',
      viewDetails: 'مشاهده جزئیات',
      deleteTask: 'حذف وظیفه',
      retryFile: 'تلاش مجدد این فایل',
      retryAllFailed: 'تلاش مجدد برای همه فایل‌های ناموفق',
      retrySelected: 'تلاش مجدد برای فایل‌های انتخاب‌شده',
    },

    labels: {
      creator: 'ایجادکننده',
      created: 'زمان ایجاد',
      progress: 'پیشرفت',
    },

    creator: {
      admin: 'مدیر',
      keyPrefix: 'کلید: {key}',
    },

    time: {
      created: 'زمان ایجاد',
    },

    details: {
      trigger: 'منبع',
      triggerRef: 'ارجاع منبع',
      fileList: 'لیست فایل‌ها',
      itemList: 'جزئیات اجرا',
      sourcePath: 'مسیر مبدأ',
      targetPath: 'مسیر مقصد',
      payload: 'پارامترهای وظیفه',
      errorInfo: 'اطلاعات خطا',
      noFiles: 'اطلاعات فایلی موجود نیست',
      none: 'هیچ',
    },

    timeline: {
      start: 'شروع',
      finish: 'پایان',
      duration: 'مدت زمان',
    },

    progress: {
      items: '{count} مورد',
      empty: '-',
    },

    indexDetails: {
      rebuildTitle: 'بازسازی ایندکس نقطه اتصال',
      applyDirtyTitle: 'به‌روزرسانی افزایشی ایندکس',
      mountUnit: 'نقطه اتصال',
      queueUnit: 'صف',
      queueProcessed: 'پردازش صف',
      updated: 'به‌روزرسانی',
      deleted: 'حذف',
      skipped: 'رد شده',
      duration: 'مدت زمان',
      discovered: 'فایل/پوشه شناسایی‌شده',
      upserted: 'نوشتن در ایندکس',
      path: 'مسیر',
      realtime: 'پیشرفت لحظه‌ای',
      scannedDirs: 'پوشه‌های اسکن‌شده',
      discoveredShort: 'شناسایی‌شده',
      pending: 'در انتظار نوشتن',
      noMounts: 'اطلاعات نقطه اتصال موجود نیست',
      noRecords: 'هیچ رکورد پردازشی وجود ندارد',
      unknownMount: 'نقطه اتصال نامشخص',
      errors: {
        indexNotReady: 'ایندکس آماده نیست',
        mountNotFound: 'نقطه اتصال یافت نشد',
        permissionDenied: 'دسترسی کافی نیست',
      },
    },

    trigger: {
      manual: 'دستی',
      scheduled: 'زمان‌بندی‌شده',
    },

    fileStatus: {
      success: 'موفق',
      processing: 'در حال انتقال',
      retrying: 'در حال تلاش مجدد',
      failed: 'ناموفق',
      skipped: 'رد شده',
      pending: 'در انتظار',
    },

    retry: {
      retrying: 'در حال تلاش مجدد',
      retryCount: '{count} بار تلاش مجدد شده',
      retrySuccess: 'تلاش مجدد موفق بود',
      retryFailed: 'تلاش مجدد ناموفق بود',
      retryExhausted: 'به حداکثر تعداد تلاش مجدد رسید',
      withRetry: '(تلاش مجدد {count} بار)',
    },

    error: {
      loadFailed: 'بارگذاری لیست وظایف ناموفق بود',
      cancelFailed: 'لغو وظیفه ناموفق بود',
      deleteFailed: 'حذف وظیفه ناموفق بود',
      deleteBatchFailed: 'حذف دسته‌ای ناموفق بود؛ هیچ وظیفه‌ای حذف نشد',
      taskNotFound: 'وظیفه یافت نشد',
      cannotDeleteRunning: 'نمی‌توان وظیفه در حال اجرا را حذف کرد؛ ابتدا آن را لغو کنید',
      cannotDeleteRunningBatch: '{count} وظیفه در حال اجرا هستند و قابل حذف نیستند؛ ابتدا آن‌ها را لغو کنید',
      noTasksToDelete: 'وظایف انتخاب‌شده قابل حذف نیستند',
      retryFailed: 'تلاش مجدد ناموفق بود',
      noFailedFiles: 'فایل ناموفقی برای تلاش مجدد وجود ندارد',
      cannotRetryRunning: 'نمی‌توان روی وظیفه در حال اجرا تلاش مجدد انجام داد',
    },

    success: {
      deleted: 'وظیفه حذف شد',
      deletedBatch: '{count} وظیفه با موفقیت حذف شد',
      deletedPartial: 'حذف انجام شد؛ موفق {success} مورد، ناموفق {failed} مورد',
      retryStarted: 'وظیفه تلاش مجدد ایجاد شد',
      retryStartedWithCount: 'وظیفه تلاش مجدد شامل {count} فایل ناموفق ایجاد شد',
    },

    confirmDelete: {
      title: 'تأیید حذف',
      single: 'آیا مطمئن هستید که می‌خواهید وظیفه "{name}" را حذف کنید؟ این عملیات قابل بازگشت نیست.',
      batch: 'آیا مطمئن هستید که می‌خواهید {count} وظیفه انتخاب‌شده را حذف کنید؟ این عملیات قابل بازگشت نیست.',
    },

    confirmCancel: {
      title: 'تأیید لغو',
      single: 'آیا مطمئن هستید که می‌خواهید وظیفه "{name}" را لغو کنید؟ پس از لغو، پردازش بعدی متوقف می‌شود.',
      batch: 'آیا مطمئن هستید که می‌خواهید {count} وظیفه انتخاب‌شده را لغو کنید؟ پس از لغو، پردازش بعدی متوقف می‌شود.',
    },

    empty: {
      title: 'هیچ وظیفه‌ای وجود ندارد',
      description: 'در حال حاضر هیچ رکورد وظیفه‌ای موجود نیست',
      tableNoData: 'هیچ وظیفه‌ای وجود ندارد',
    },

    taskName: {
      single: '{file}',
      batch: '{file} (+{count})',
      default: 'وظیفه {id}',
    },

    taskType: {
      copy: 'کپی',
      fs_index_rebuild: 'بازسازی ایندکس',
      fs_index_apply_dirty: 'اعمال افزایشی ایندکس',
      unknown: 'وظیفه نامشخص',
      unknownWithType: 'وظیفه نامشخص ({type})',
    },

    // مراحل وظایف مرحله‌ای
    stages: {
      scanning: 'در حال اسکن فایل',
      indexing: 'در حال ساخت ایندکس',
      finalizing: 'در حال تکمیل',
      loading: 'در حال بارگذاری تغییرات',
      applying: 'در حال اعمال تغییرات',
      committing: 'در حال ثبت به‌روزرسانی',
      pending: 'در انتظار',
      running: 'در حال اجرا',
      completed: 'تکمیل شده',
      failed: 'ناموفق',
    },

    // آمار
    stats: {
      total: 'مجموع صفحه فعلی',
      running: 'در حال اجرا در این صفحه',
      completed: 'تکمیل‌شده در این صفحه',
      success: 'موفق',
      failed: 'ناموفق در این صفحه',
      skipped: 'رد شده',
    },

    unknownFile: 'فایل نامشخص',
  },
};
