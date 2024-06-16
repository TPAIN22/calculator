import React from 'react';

function Right({ arg, setArg }) {
  // تعريف المتغيرات
  let people;
  let amount;
  let tip;

  // دالة لتحويل النصوص إلى أعداد صحيحة
  const toInt = (arg) => {
    people = parseInt(arg.people, 10);
    amount = parseFloat(arg.amount, 10);
    tip = parseFloat(arg.tip, 10);
  };
  // استدعاء الدالة لتحويل القيم
  toInt(arg);
  const reset = () => {
    setArg({
      people: '',
      amount: '',
      tip: ''
    });
  };

  // دالة لتقريب الأرقام إلى منزلتين عشريتين بدقة
  const roundToTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  // حساب مبلغ البقشيش لكل شخص
  const tipAmountPerPerson = people && amount && tip ? roundToTwoDecimals((amount * (tip / 100)) / people) : 0;
  const totalAmountPerPerson = people && amount && tip ? roundToTwoDecimals((amount + amount * (tip / 100)) / people) : 0;

  // التحقق مما إذا كانت جميع القيم في arg فارغة
  const isDisabled = !people && !amount && !tip;

  return (
    <div className="flex flex-col justify-between w-full min-w-64 max-w-md px-8 py-8 pt-12 bg-[var(--Very-dark-cyan)] rounded-2xl">
      <div className="grid gap-8">
        <div className="flex justify-between items-center">
          <div className="text-[var(--Light-grayish-cyan)] text-sm font-normal">
            <p>Tip Amount</p>
            <p className="text-[var(--Dark-grayish-cyan)] text-xs mt-1">/ Person</p>
          </div>
          <p className="text-4xl text-[var(--Strong-cyan)] font-bold">${tipAmountPerPerson}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[var(--Light-grayish-cyan)] text-sm font-normal">Total</p>
            <p className="text-[var(--Dark-grayish-cyan)] text-xs mt-1">/ Person</p>
          </div>
          <p className="text-4xl text-[var(--Strong-cyan)] font-bold">${totalAmountPerPerson}</p>
        </div>
      </div>

      <div>
        <button className={`${isDisabled ? 'bg-[var(--Ver-dark-cyan)] text-[var(--Dark-grayish-cyan)]'  : 'bg-[var(--Strong-cyan)] hover:bg-[var(--Light-grayish-cyan)]'} w-full text-[var(--Very-dark-cyan)] rounded-md font-bold tracking-widest py-2 cursor-pointer`}
        onClick={reset}
        disabled={isDisabled}>RESET</button>
      </div>
    </div>
  );
}

export default Right;
