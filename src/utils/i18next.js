import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language = localStorage.getItem("language");

const resources = {
  EN: {
    translation: {
      sidebar: {
        dashboard: "Dashboard",
        tables: "Tables",
        products: "Products",
        discounts: "Discounts",
        customers: "Customers",
        features: "Features",
        orders: "Orders",
        kitchen: "Kitchen",
        inventory: "Inventory",
        ratings: "Ratings",
        reports: "Reports",
        applications: "Applications",
        settings: "Settings",
      },
      dashboard: {
        financial: "Financial",
        today: "Today",
        week: "Week",
        month: "Month",
        totalRevenue: "Total Revenue",
        totalOrders: "Total Orders",
        mostPopularProducts: "Most Popular Products",
        beafBurger: "Beaf Burger",
        pepsiCols: "Pepsi Cols 330ml",
        water: "Water 250ml",
        cake: "Cake",
        branches: "Branches",
        locationName: "Location Name",
        ordersNumber: "Orders Number",
        doha: "doha",
        startAt: "Start At",
        endAt: "End At",
        almostOutOfStock: "Almost Out of Stock",
        frenchFries: "French Fries",
        pizza: "pizza",
        latestOrders: "Latest Orders",
        source: "Source",
        cashier: "Cashier",
        serviceType: "Service Type",
        dining: "Dining",
        tableCode: "Table Code",
        viewDetails: "View Details",
        latestReviews: "Latest Reviews",
        sep: "SEP",
      },
      login: {
        login: "Login",
        notRegister: "Not registered yet?",
        register: "Register",
        username: "Email Address",
        password: "Password",
        enterPassword: "Enter password",
        emailRequired: "email is required",
        passwordRequired: "Password is required",
        forgotPassword: "Forgot Password?",
        enterEmail: "Enter email address",
        userNotExist: "User does not exist, Please Register",
        passwordIncorrect: "Password incorrect",
      },
      signup: {
        createNewAccount: "Create New Account",
        alreadyAccount: "Already have an account?",
        username: "Username",
        emailAddress: "Email Address",
        countryCode: "Country Code",
        phoneNumber: "Phone Number",
        confirmPassword: "Confirm Password",
        enterEmailAdd: "Enter email address",
        enterPhoneNo: "Enter phone number",
        enterConfirmPassword: "Enter Confirm Password",
        byRegister: "By registering, I agree to the",
        flavours: "flavours platform policies",
        next: "next",
      },
      slider: {
        heading1: "Flavours is a seamless system with a simple interface",
        subHeading1:
          "It gives you a comprehensive view of making decisions to improve your overall performance",
        heading2: "Flavours provides you with accurate data for your business",
        subHeading2:
          "It gives you a comprehensive view of making decisions to improve your overall performance",
        heading3: "You can coordinate and prepare menus",
        subHeading3:
          "Ease of adding products, with the ability to update and remove them as needed",
        heading4: "Secure / the system is approved by the ZATCA",
        subHeading4:
          "You can try all the benefits of the system for free for 14 days",
      },
      validation: {
        required: "This field is required",
        usernameOrEmailRequired: "email is required",
        passwordRequired: "Password is required",
      },
      country: {
        first: "SA Saudi Arabia | (+966)",
      },
      navbar: {
        exportAll: "Export All",
      },
      table: {
        tables: "Tables",
        newTable: "New Table",
        no: "No",
        tableCode: "Table Code",
        branch: "Branch",
        status: "Status",
        exportSelected: "Export Selected",
        doha: "doha",
        available: "Available",
        addNewTable: "Add New Table",
        selectBranch: "Select branch",
        enterTableCode: "Enter Table Code",
        addCode: "Add Code",
        createTable: "Create Table",
      },
    },
  },
  AR: {
    translation: {
      sidebar: {
        dashboard: "لوحة القيادة",
        tables: "الجداول",
        products: "المنتجات",
        discounts: "الخصومات",
        customers: "العملاء",
        features: "الميزات",
        orders: "الطلبات",
        kitchen: "المطبخ",
        inventory: "المخزون",
        ratings: "التقييمات",
        reports: "التقارير",
        applications: "التطبيقات",
        settings: "الإعدادات",
      },
      dashboard: {
        financial: "المالية",
        today: "اليوم",
        week: "الأسبوع",
        month: "الشهر",
        totalRevenue: "إجمالي الإيرادات",
        totalOrders: "إجمالي الطلبات",
        mostPopularProducts: "أكثر المنتجات شعبية",
        beafBurger: "برجر اللحم",
        pepsiCols: "بيبسي كولا 330 مل",
        water: "ماء 250 مل",
        cake: "كعكة",
        branches: "الفروع",
        locationName: "اسم الموقع",
        ordersNumber: "عدد الطلبات",
        doha: "الدوحة",
        startAt: "البداية",
        endAt: "النهاية",
        almostOutOfStock: "على وشك النفاد",
        frenchFries: "بطاطس مقلية",
        pizza: "بيتزا",
        latestOrders: "أحدث الطلبات",
        source: "المصدر",
        cashier: "أمين الصندوق",
        serviceType: "نوع الخدمة",
        dining: "تناول الطعام",
        tableCode: "رمز الطاولة",
        viewDetails: "عرض التفاصيل",
        latestReviews: "آخر مراجعات",
        sep: "سبتمبر",
      },
      login: {
        login: "تسجيل الدخول",
        notRegister: "لم تسجل بعد؟",
        register: "تسجيل",
        username: "اسم المستخدم أو عنوان البريد الإلكتروني",
        password: "كلمة المرور",
        enterPassword: "أدخل كلمة المرور",
        emailRequired: "اسم المستخدم أو البريد الإلكتروني مطلوب",
        passwordRequired: "كلمة المرور مطلوبة",
        forgotPassword: "نسيت كلمة المرور؟",
        enterEmail: "أدخل اسم المستخدم أو عنوان البريد الإلكتروني",
        userNotExist: "المستخدم غير موجود، يرجى التسجيل",
        passwordIncorrect: "كلمة المرور غير صحيحة",
      },
      signup: {
        createNewAccount: "إنشاء حساب جديد",
        alreadyAccount: "هل لديك حساب بالفعل؟",
        username: "اسم المستخدم",
        emailAddress: "عنوان البريد الإلكتروني",
        countryCode: "رمز البلد",
        phoneNumber: "رقم الهاتف",
        confirmPassword: "تأكيد كلمة المرور",
        enterEmailAdd: "أدخل عنوان البريد الإلكتروني",
        enterPhoneNo: "أدخل رقم الهاتف",
        enterConfirmPassword: "أدخل تأكيد كلمة المرور",
        byRegister: "بالتسجيل، أوافق على",
        flavours: "سياسات منصة النكهات",
        next: "التالي",
      },
      slider: {
        heading1: "نكهات هو نظام سلس بواجهة بسيطة",
        subHeading1: "يمنحك رؤية شاملة لاتخاذ القرارات لتحسين أدائك العام",
        heading2: "نكهات يوفر لك بيانات دقيقة لعملك",
        subHeading2: "يمنحك رؤية شاملة لاتخاذ القرارات لتحسين أدائك العام",
        heading3: "يمكنك تنسيق وإعداد القوائم",
        subHeading3:
          "سهولة إضافة المنتجات، مع إمكانية تحديثها وإزالتها حسب الحاجة",
        heading4: "آمن / النظام معتمد من قبل الهيئة العامة للزكاة والدخل",
        subHeading4: "يمكنك تجربة جميع مزايا النظام مجانًا لمدة 14 يومًا",
      },
      validation: {
        required: "هذه الخانة مطلوبه",
        usernameOrEmailRequired: "اسم المستخدم أو البريد الإلكتروني مطلوب",
        passwordRequired: "كلمة المرور مطلوبة",
      },
      country: {
        first: "السعودية SA | (+966)",
      },
      navbar: {
        exportAll: "تصدير الكل",
      },
      table: {
        tables: "جداول",
        newTable: "جدول جديد",
        no: "رقم",
        tableCode: "رمز الجدول",
        branch: "فرع",
        status: "الحالة",
        exportSelected: "تصدير المحدد",
        doha: "الدوحة",
        available: "متاح",
        addNewTable: "إضافة جدول جديد",
        selectBranch: "اختر الفرع",
        enterTableCode: "أدخل رمز الجدول",
        addCode: "إضافة رمز",
        createTable: "إنشاء جدول",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language?.toString(), // default language
    fallbackLng: "EN", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
