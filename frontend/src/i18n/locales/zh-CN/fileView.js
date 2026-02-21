export default {
  fileView: {
    title: "پیش نمایش فایل",
    loading: "در حال بارگذاری...",
    error: "بارگیری انجام نشد",
    notFound: "فایل وجود ندارد",

    // 文件信息
    fileInfo: {
      filename: "نام فایل",
      fileSize: "اندازه فایل",
      uploadTime: "زمان آپلود",
      mimetype: "نوع فایل",
      fileLink: "لینک فایل",
      needPassword: "رمز عبور مورد نیاز برای دسترسی",
      copyLink: "لینک را کپی کنید",
      linkCopied: "پیوند در کلیپ بورد کپی شد",
      copyFailed: "کپی ناموفق بود",
      accessCount: "بازدید می کند",
      expiresAt: "زمان انقضا",
      accessMode: "حالت دسترسی",
      proxyAccess: "دسترسی به پروکسی محلی",
      directAccess: "直链/URL代理访问",
      limit: "محدود کردن",
    },

    // تایید رمز عبور
    password: {
      title: "لطفا رمز دسترسی را وارد کنید",
      description: "این فایل با رمز عبور محافظت می شود，لطفا برای مشاهده محتوا رمز عبور را وارد کنید",
      label: "رمز عبور",
      placeholder: "لطفا رمز عبور را وارد کنید",
      submit: "تایید کنید",
      error: "رمز عبور اشتباه，لطفا دوباره امتحان کنید",
      loading: "در حال تأیید...",
      showPassword: "نمایش رمز عبور",
      hidePassword: "پنهان کردن رمز عبور",
    },

    // 文件操作
    actions: {
      download: "دانلود فایل",
      downloadFile: "دانلود فایل",
      updateSuccess: "اطلاعات فایل با موفقیت به روز شد",
      downloadFailed: "دانلود انجام نشد",
      downloadExpired: "ممکن است لینک دانلود منقضی شده باشد，لطفاً برای دریافت لینک دانلود جدید، بازخوانی کنید",
      share: "لینک را به اشتراک بگذارید",
      shareFileText: "فایل ها را به اشتراک بگذارید",
      edit: "ویرایش اطلاعات",
      delete: "حذف فایل ها",
      preview: "پیش نمایش فایل",
      previewFailed: "پیش نمایش ناموفق بود",
      getPreviewUrlFailed: "URL پیش نمایش دریافت نشد",
      noUrlInResponse: "هیچ URL در داده های برگشتی وجود ندارد",
      shareSuccess: "موفقیت را به اشتراک بگذارید",
      shareFailed: "اشتراک گذاری انجام نشد",
      deleteConfirm: "آیا مطمئن هستید که می خواهید این فایل را حذف کنید؟？این عمل قابل لغو نیست。",
      deleteSuccess: "فایل با موفقیت حذف شد",
      deleteFailed: "حذف نشد",
      deleting: "در حال حذف...",
      noPermission: "مجوز کافی نیست",
      redirecting: "پرش خودکار پس از چند ثانیه",
      redirectMessage: "فایل با موفقیت حذف شد，به زودی به صفحه اصلی خواهد رفت",
      retry: "دوباره امتحان کنید",
      refresh: "تازه کردن",
      manualCopy: "امکان کپی خودکار وجود ندارد，لطفا لینک را به صورت دستی کپی کنید",
      copyLink: "لینک را کپی کنید",
      copied: "کپی شده است",
      nativeShare: "اشتراک بومی",
      shareToSocial: "در پلتفرم های اجتماعی به اشتراک بگذارید",
      qrCode: "کد QR",
      generating: "در حال تولید...",
      scanToShare: "برای اشتراک گذاری کد را اسکن کنید",
      qrCodeError: "ساخت شکست خورد",
      shareFileText: "فایل ها را به اشتراک بگذارید：{filename}",
    },

    // پیش نمایش فایل
    preview: {
      loading: "در حال بارگیری پیش نمایش...",
      error: "پیش نمایش بارگیری نشد",
      notSupported: "پیش نمایش برای این نوع فایل پشتیبانی نمی شود",
      downloadToView: "لطفا برای مشاهده فایل را دانلود کنید",
      fullscreen: "تمام صفحه",
      exitFullscreen: "خروج از تمام صفحه",

      // سوئیچ حالت پیش نمایش متن（统一归属“文本预览”）
      modes: {
        text: "متن",
        code: "کد",
        markdown: "Markdown",
        html: "HTML",
      },

      // 通用预览
      generic: {
        applicationFile: "فایل های کاربردی",
        fontFile: "فایل فونت",
        modelFile: "فایل مدل سه بعدی",
        unsupportedType: "این نوع فایل از پیش نمایش آنلاین پشتیبانی نمی کند",
        downloadAndExtract: "لطفاً برای باز کردن از نرم افزار رفع فشار استفاده کنید",
        downloadAndInstall: "لطفا دانلود و نصب یا اجرا کنید",
        downloadAndOpenWithDb: "لطفاً از ابزار پایگاه داده برای باز کردن آن استفاده کنید",
        downloadAndInstallFont: "请下载后安装字体",
        downloadAndMount: "请下载后挂载或刻录",
        downloadAndOpenWith: "请下载后使用相应的应用程序打开",
        showDetails: "显示详细信息",
        hideDetails: "隐藏详细信息",
        fileInfo: "文件信息",
        filename: "文件名",
        mimeType: "MIME类型",
        fileExtension: "文件扩展名",
        suggestedApps: "建议使用",
      },

      // 文本预览
      text: {
        title: "پیش نمایش فایل متنی",
        loading: "در حال بارگذاری...",
        error: "محتوای متنی بارگیری نشد",
        tooLarge: "فایل خیلی بزرگ است，به دلایل عملکرد，برای مشاهده کامل مطالب لطفا دانلود کنید",
        truncated: "محتوا کوتاه شده است，لطفا برای مشاهده فایل کامل دانلود کنید",
      },

      // 代码预览
      code: {
        title: "پیش نمایش کد",
        loading: "در حال بارگذاری...",
      },

      // 配置文件预览
      config: {
        title: "پیش نمایش نمایه",
        loading: "در حال بارگذاری...",
      },

      // Markdown预览
      markdown: {
        title: "پیش نمایش Markdown",
        loading: "در حال بارگذاری...",
        error: "پیش نمایش Markdown بارگیری نشد",
      },

      // HTML预览
      html: {
        title: "پیش نمایش HTML",
        loading: "در حال بارگذاری...",
        loadingSource: "در حال بارگیری کد منبع HTML...",
        error: "بارگیری HTML انجام نشد",
        viewSource: "مشاهده کد منبع",
        viewRendered: "نمایش رندر",
      },

      // PDF预览
      pdf: {
        title: "پیش نمایش PDF",
        loading: "در حال بارگذاری...",
        error: "بارگیری PDF انجام نشد",
        browserNative: "پیش نمایش بومی",
        pdfjsLabel: "PDF.js",
      },

      // EPUB预览
      epub: {
        title: "EPUB预览",
        loading: "加载中...",
        error: "EPUB加载失败",
        browserNative: "本地预览",
        toc: "目录",
        closeToc: "关闭目录",
        noToc: "无目录",
        readingMode: "阅读模式",
        modePaginated: "翻页",
        modeScrolled: "滚动",
        prevPage: "上一页",
        nextPage: "下一页",
        page: "第",
        bookmarks: "书签",
        addBookmark: "添加书签",
        removeBookmark: "移除书签",
        untitledBookmark: "未命名书签",
        historyBack: "返回",
        historyForward: "前进",
        progressSaved: "进度已保存",
        progressRestored: "已恢复到上次阅读位置",
      },

      // 图片预览
      image: {
        title: "图片预览",
        loading: "加载中...",
        error: "图片加载失败",
      },

      // 视频预览
      video: {
        title: "视频预览",
        loading: "加载中...",
        error: "视频加载失败",
        notSupported: "您的浏览器不支持视频标签",
        hlsShareNotSupportedTitle: "分享页不支持 m3u8 切片视频",
        hlsShareNotSupportedTip:
          "这是 m3u8 清单文件，分享页（单文件）无法播放。请回到“挂载浏览”页面配合分片播放",
      },

      // 直链预览提示
      directNotSupported: "当前存储不支持直链预览，请切换为代理模式。",

      // 音频预览
      audio: {
        title: "音频预览",
        loading: "加载中...",
        error: "音频加载失败",
        notSupported: "您的浏览器不支持音频标签",
      },

      // Office预览
      office: {
        title: "Office预览",
        loading: "加载中...",
        loadingDetail: "加载Office预览中，请稍候...",
        error: "Office预览加载失败",
        useMicrosoft: "使用Microsoft预览",
        useGoogle: "使用Google预览",
        refreshPreview: "刷新预览",
        downloadFile: "下载文件",
        previewTrouble: "如果预览不正常，请尝试",
        switchService: "یا سرویس پیش نمایش را تغییر دهید，或",
        afterDownload: "بعدا مشاهده کنید",
        wordPreview: "پیش نمایش سند Word",
        excelPreview: "Excel表格预览",
        powerpointPreview: "PowerPoint演示文稿预览",
        passwordIssue: "به نظر می رسد مشکل تأیید رمز عبور است，لطفا امتحان کنید：",
        refreshAndRetry: "刷新页面后重新输入密码",
        confirmPassword: "تایید کنید رمز عبوری که وارد کرده اید صحیح است",
        tryUrlPassword: "尝试在URL中直接添加密码参数",
        googleService: "使用Google Docs服务",
        microsoftService: "از مایکروسافت استفاده کنید خدمات اداری",
        proxyMode: " (حالت پروکسی کارگر)",
        directMode: " (حالت دسترسی مستقیم)",
        providerMicrosoft: "Microsoft Office Online",
        providerGoogle: "Google Docs",
      },
    },

    // 错误消息
    errors: {
      networkError: "خطای شبکه，لطفا اتصال شبکه را بررسی کنید",
      serverError: "服务器错误，请稍后重试",
      unauthorized: "未授权访问",
      forbidden: "访问被禁止",
      notFound: "文件不存在",
      unknown: "未知错误",
      missingSlug: "缺少文件标识符",
      loadFailed: "无法加载文件信息",
      getDetailsFailed: "获取详情失败",
      getDetailsFailedMessage: "获取文件详情失败，将使用当前显示的信息",
      updateFailed: "更新失败",
    },
  },
};
