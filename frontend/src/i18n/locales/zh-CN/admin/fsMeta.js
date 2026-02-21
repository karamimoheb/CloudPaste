export default {
  fsMeta: {
    // عنوان بالا و نوار ابزار
    title: "مدیریت فراداده",
    toolbar: {
      create: "ایجاد فراداده جدید",
      createShort: "جدید",
      refresh: "تازه‌سازی",
      refreshing: "در حال تازه‌سازی...",
      refreshShort: "تازه",
    },

    // جستجو و آمار
    search: {
      placeholder: "جستجوی مسیر...",
      hint: "جستجوی سمت کلاینت، پشتیبانی از تطبیق تقریبی مسیر",
    },
    stats: {
      total: "مجموع {count} رکورد",
      searchResultTag: "(نتایج جستجو)",
    },
    lastRefresh: "آخرین تازه‌سازی",

    // متن‌های عمومی
    common: {
      notSet: "تنظیم نشده",
      set: "تنظیم شده",
      inherited: "ارث‌بری شده",
      inheritedSuffix: " (ارث‌بری شده)",
      loading: "در حال بارگذاری...",
      noDataCell: "بدون داده",
    },

    // جدول
    table: {
      path: "مسیر",
      headerMarkdown: "توضیحات بالایی",
      footerMarkdown: "توضیحات پایینی",
      hidePatterns: "قوانین مخفی‌سازی",
      password: "رمز عبور",
      createdAt: "زمان ایجاد",
      actions: "عملیات",
      noData: "هیچ رکورد فراداده‌ای وجود ندارد",
    },

    // فرم
    form: {
      titleCreate: "ایجاد فراداده",
      titleEdit: "ویرایش فراداده",
      tabs: {
        basic: "اطلاعات پایه",
        path: "انتخاب مسیر",
      },
      path: {
        label: "مسیر",
        required: "مسیر نمی‌تواند خالی باشد",
        placeholder: "/claw",
        helper: "مسیر فایل سیستم، باید با / شروع شود؛ می‌توانید از دکمه سمت راست برای انتخاب استفاده کنید",
        selectButton: "انتخاب مسیر",
      },
      headerMarkdown: {
        label: "توضیحات بالایی (Markdown)",
        placeholder: "توضیحات بالایی با پشتیبانی از Markdown...",
        inheritLabel: "ارث‌بری این توضیح برای زیرپوشه‌ها",
      },
      footerMarkdown: {
        label: "توضیحات پایینی (Markdown)",
        placeholder: "توضیحات پایینی با پشتیبانی از Markdown...",
        inheritLabel: "ارث‌بری این توضیح برای زیرپوشه‌ها",
      },
      hidePatterns: {
        label: "قوانین مخفی‌سازی (عبارت منظم)",
        placeholder:
          "هر خط یک عبارت منظم، مثال:\n^\\\\..*\n.*\\\\.tmp$\nnode_modules",
        inheritLabel: "ارث‌بری قوانین مخفی‌سازی برای زیرپوشه‌ها",
        helper: "فایل‌های مطابق این الگو در رابط کاربری مخفی می‌شوند (هر خط یک regex)",
      },
      password: {
        label: "رمز دسترسی",
        placeholderKeep: "خالی بگذارید تا تغییر نکند",
        placeholderSetOptional: "تنظیم رمز دسترسی پوشه (اختیاری)",
        inheritLabel: "ارث‌بری حفاظت با رمز برای زیرپوشه‌ها",
        helper: "پس از تنظیم، دسترسی به این مسیر نیاز به تأیید رمز دارد",
      },
      pathSelector: {
        currentSelection: "انتخاب فعلی",
        selectDirectory: "انتخاب پوشه",
        rootLabel: "/",
        loading: "در حال بارگذاری...",
      },
      actions: {
        cancel: "لغو",
        create: "ایجاد",
        creating: "در حال ایجاد...",
        update: "به‌روزرسانی",
        updating: "در حال به‌روزرسانی...",
      },
      errors: {
        submitFailed: "ارسال ناموفق بود",
      },
    },

    // وضعیت رمز
    passwordStatus: {
      inherited: "حفاظت ارث‌بری شده",
      protected: "حفاظت شده",
    },

    // نمایش قوانین مخفی‌سازی
    hidePatternsStatus: {
      count: "{count} مورد",
    },

    // تأیید حذف
    confirmDelete: {
      title: "تأیید حذف",
      message: 'آیا مطمئن هستید که می‌خواهید فراداده مسیر "{path}" را حذف کنید؟',
      confirm: "حذف",
      cancel: "لغو",
    },

    // حالت خالی و خطا
    empty: {
      noData: "هیچ رکورد فراداده‌ای وجود ندارد",
      noSearchResults: "هیچ رکورد مطابق با جستجو یافت نشد",
      createFirst: "اولین رکورد را ایجاد کنید",
    },

    // پیام موفقیت
    success: {
      created: "فراداده با موفقیت ایجاد شد",
      updated: "فراداده با موفقیت به‌روزرسانی شد",
      deleted: "فراداده با موفقیت حذف شد",
    },

    // پیام خطا
    error: {
      loadFailed: "بارگذاری لیست فراداده ناموفق بود",
      createFailed: "ایجاد فراداده ناموفق بود",
      updateFailed: "به‌روزرسانی فراداده ناموفق بود",
      deleteFailed: "حذف فراداده ناموفق بود",
    },

    // دکمه‌های عملیات
    actions: {
      edit: "ویرایش",
      delete: "حذف",
    },
  },
};
