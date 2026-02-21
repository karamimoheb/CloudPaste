export default {
  search: {
    title: "جستجوی فایل",
    placeholder: "جستجوی نام فایل...",

    scope: {
      global: "جستجوی سراسری",
      mount: "جستجو در یک درایو",
      directory: "جستجو در پوشه فعلی و زیرپوشه‌ها",
    },

    results: {
      foundInMounts: "تعداد {count} فایل در {mounts} نقطه اتصال یافت شد",
      loadMore: "بارگذاری بیشتر",
      loadingMore: "در حال بارگذاری نتایج بیشتر...",
      noResults: "فایل مطابقی یافت نشد",
      noResultsHint: "لطفاً شرایط جستجو را تغییر دهید یا از کلمات کلیدی دیگری استفاده کنید",

      item: {
        copyPath: "کپی مسیر",
      },
    },

    status: {
      idle: "لطفاً کلمه کلیدی جستجو را وارد کنید",
      searching: "در حال جستجو...",
      failed: "جستجو ناموفق بود",
    },

    errors: {
      queryTooShort: "کلمه جستجو باید حداقل ۳ کاراکتر باشد",
      searchFailed: "جستجو ناموفق بود، لطفاً بعداً دوباره تلاش کنید",
      loadMoreFailed: "بارگذاری نتایج بیشتر ناموفق بود",
    },

    history: {
      recent: "جستجوهای اخیر",
      clear: "پاک کردن تاریخچه",
    },

    tips: {
      keywordTips: "از جستجوی تقریبی نام فایل پشتیبانی می‌شود",
    },

    notices: {
      pathRestricted: "محدوده جستجو بر اساس دسترسی شما به این مسیر محدود شد: {path}",
      passwordFiltered: "تعداد {count} نتیجه محافظت‌شده با رمز پنهان شد",
    },
  },
};
