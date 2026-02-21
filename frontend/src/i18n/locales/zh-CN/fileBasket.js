export default {
  fileBasket: {
    // عنوان
    title: "سبد فایل",
    
    // متن دکمه‌ها
    button: {
      empty: "سبد فایل",
      withCount: "سبد فایل ({count})",
    },

    // عنوان و برچسب‌های پنل
    panel: {
      title: "سبد فایل",
      summary: "{fileCount} فایل، از {directoryCount} پوشه",
      totalSize: "حجم کل: {size}MB",
      empty: "سبد فایل خالی است",
      emptyDescription: "در مرورگر فایل، فایل‌ها را انتخاب کرده و به سبد اضافه کنید",
    },

    // دکمه‌های عملیات
    actions: {
      packDownload: "دانلود به صورت بسته‌ای",
      clear: "خالی کردن سبد",
      close: "بستن",
      remove: "حذف",
      addToBasket: "افزودن به سبد فایل",
      removeFromBasket: "حذف از سبد فایل",
      batchAdd: "افزودن گروهی",
      // متن کوتاه موبایل
      mobile: {
        batchAdd: "افزودن",
      },
    },

    // پیام‌ها
    messages: {
      addSuccess: "{count} فایل به سبد اضافه شد، اکنون مجموعاً {total} فایل",
      addFailed: "افزودن فایل به سبد ناموفق بود",
      removeSuccess: "فایل از سبد حذف شد",
      removeFailed: "حذف فایل از سبد ناموفق بود",
      toggleFailed: "تغییر وضعیت سبد فایل ناموفق بود",
      batchAddSuccess: "{count} فایل به صورت گروهی اضافه شد، اکنون مجموعاً {total} فایل",
      batchAddFailed: "افزودن گروهی فایل‌ها ناموفق بود",
      clearSuccess: "سبد فایل خالی شد",
      clearFailed: "خالی کردن سبد فایل ناموفق بود",
      noFilesToAdd: "فایلی برای افزودن وجود ندارد (پوشه‌ها نادیده گرفته می‌شوند)",
      emptyBasket: "سبد فایل خالی است، لطفاً ابتدا فایل اضافه کنید",
      taskCreated: "وظیفه ایجاد شد: {taskName}",
      taskCreateFailed: "ایجاد وظیفه بسته‌بندی ناموفق بود",
      cancelled: "عملیات لغو شد",
    },

    // هشدارها
    warnings: {
      large: "حجم کل فایل‌های انتخاب‌شده حدود {size}MB است، بسته‌بندی ممکن است کمی زمان ببرد",
      veryLarge: "حجم کل فایل‌های انتخاب‌شده حدود {size}MB است، بسته‌بندی ممکن است زمان بیشتری ببرد و حافظه بیشتری مصرف کند",
    },

    // تأییدیه‌ها
    confirmations: {
      continueAnyway: "آیا ادامه می‌دهید؟",
      clearBasket: "آیا مطمئن هستید که می‌خواهید سبد فایل را خالی کنید؟ این کار همه فایل‌های جمع‌آوری‌شده را حذف می‌کند.",
    },

    // مربوط به وظیفه
    task: {
      name: "دانلود بسته‌ای {count} فایل (از {directories} پوشه)",
      preparing: "در حال آماده‌سازی دانلود...",
      downloading: "در حال دانلود فایل‌ها...",
      generating: "در حال ایجاد فایل فشرده...",
      completed: "دانلود بسته‌ای کامل شد",
      failed: "دانلود بسته‌ای ناموفق بود",
      summarySuccess: "تعداد {count} فایل با موفقیت دانلود شد",
      summaryWithFailures: "موفق: {success}، ناموفق: {failed}",
      failedFilesHeader: "دانلود فایل‌های زیر ناموفق بود:",
    },

    // خطاها
    errors: {
      noDownloadUrl: "دریافت لینک دانلود فایل ممکن نیست",
      downloadFailed: "دانلود فایل ناموفق بود",
      zipGenerationFailed: "ایجاد فایل فشرده ناموفق بود",
    },

    // اطلاعات فایل
    fileInfo: {
      fileName: "نام فایل",
      fileSize: "حجم",
      sourceDirectory: "پوشه مبدا",
      addedTime: "زمان افزودن",
    },

    // وضعیت‌ها
    status: {
      inBasket: "در سبد است",
      notInBasket: "در سبد نیست",
      processing: "در حال پردازش...",
      completed: "تکمیل شد",
      failed: "ناموفق",
    },
  },
};
