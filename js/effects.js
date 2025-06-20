document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng Fade-in khi cuộn trang
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

    const observerOptions = {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Thêm các hiệu ứng JavaScript khác tại đây nếu cần
    console.log('Effects JavaScript loaded!');
});
document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng Fade-in khi cuộn trang
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

    const observerOptions = {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Thêm các hiệu ứng JavaScript khác tại đây nếu cần
    console.log('Effects JavaScript loaded!');
});