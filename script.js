
document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = `
        <li>تحلیل: تأثیر درگیری‌های خاورمیانه بر امنیت جهانی</li>
        <li>یادداشت: راهبرد محور مقاومت در برابر اسرائیل</li>
        <li>گزارش ویژه: موقعیت ژئوپلیتیک ایران در سال 2025</li>
    `;
});
// فایل جاوااسکریپت ساده برای بارگذاری اخبار (در آینده می‌تونیم API وصل کنیم)
document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");
    // اینجا بعدا می‌توانیم اخبار واقعی بارگذاری کنیم
    newsList.innerHTML = "<li>به زودی اخبار مهم روز افزوده می‌شود.</li>";
});
