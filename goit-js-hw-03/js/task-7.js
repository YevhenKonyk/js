'use strict';
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const transaction = {
			id: 'dpst' + Math.random().toString(36).substr(2, 9),
			type: Transaction.DEPOSIT,
			amount: amount,
		};

    this.addTransaction(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  withdraw(amount) {
    if (amount > this.balance) {
      console.error('снятие такой суммы не возможно, недостаточно средств');
      return;
    }

    const transaction = {
			id: 'wthdrw' + Math.random().toString(36).substr(2, 9),
			type: Transaction.WITHDRAW,
			amount: amount,
		};

    this.addTransaction(transaction);
    this.balance -= amount;
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
		this.transactions.push(transaction);
	},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
		return this.balance;
	},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
		for (const transaction of this.transactions) {
			if (transaction.id === id) {
				return transaction;
			};
		};
	},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
		const amount = 0;

		for (const transaction of this.transactions) {
			if (transaction.type === type) {
				amount += transaction.amount;
			};
		};

		return amount;
	},
};

console.log(account.deposit(100));
console.log(account.getBalance());
console.log(account.withdraw(1000));