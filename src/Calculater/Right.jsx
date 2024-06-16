import React from 'react';

function Right({ arg, setArg }) {
  // تعريف المتغيرات
  var people;
  var amount;
  var tip;

  // دالة لتحويل النصوص إلى أعداد صحيحة
  const toInt = (arg) => {
    people = parseInt(arg.people, 10);
    amount = parseInt(arg.amount, 10);
    tip = parseInt(arg.tip, 10);
  };

  const reset = () =>{
    setArg('')
  }
  // استدعاء الدالة لتحويل القيم
  toInt(arg);

  // دالة لتقريب الأرقام إلى منزلتين عشريتين بدقة
  const roundToTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  // حساب مبلغ البقشيش لكل شخص
  const tipAmountPerPerson = people && amount && tip ? roundToTwoDecimals((amount * (tip / 100)) / people) : 0;
  const totalAmountPerPerson = people && amount && tip ? roundToTwoDecimals((amount + amount * (tip / 100)) / people) : 0;

  return (
    <div className="flex flex-col justify-between w-full min-w-64 max-w-md px-8 py-8 pt-12 bg-[var(--Very-dark-cyan)] rounded-2xl">
      <div className="grid gap-8">
        <div className="flex justify-between items-center">
          <div className="text-[var(--Light-grayish-cyan)] text-lg font-semibold">
            <p>Tip Amount</p>
            <p className="text-[var(--Dark-grayish-cyan)] text-lg">/ Person</p>
          </div>
          <p className="text-4xl text-[var(--Strong-cyan)] font-bold">${tipAmountPerPerson}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[var(--Light-grayish-cyan)] text-lg font-semibold">Total</p>
            <p className="text-[var(--Dark-grayish-cyan)] text-lg">/ Person</p>
          </div>
          <p className="text-4xl text-[var(--Strong-cyan)] font-bold">${totalAmountPerPerson}</p>
        </div>
      </div>

      <div>
        <button className="bg-[var(--Strong-cyan)] w-full text-[var(--Very-dark-grayish-cyan)] rounded-md font-semibold text-2xl py-2 cursor-pointer" disabled={ arg.amount ==='' || arg.people == '' ? true : false} onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default Right;
