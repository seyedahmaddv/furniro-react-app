import React from 'react';

const DaisyTest = () => {
    return (
        // استفاده از کلاس container برای کنترل بهتر لایوت
        <div className="container mx-auto p-0 min-h-screen overflow-x-hidden">
            {/* محدود کردن عرض محتوا */}
            <div className="max-w-screen-xl mx-auto px-4">
                {/* تست با یک المان daisyUI ساده */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body p-4">
                        <h2 className="card-title">تست daisyUI</h2>
                        <p>این یک کارت تست است</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaisyTest;