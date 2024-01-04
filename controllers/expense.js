const Expense = require("../models/expense");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    console.error(err);
  }
};

exports.addExpense = async (req, res, next) => {
  console.log(req.body);

  const { expensePrice, expenseDescription, expenseCategory } = req.body;
  try {
    const expense = await Expense.create({
      expensePrice,
      expenseDescription,
      expenseCategory,
    });
    console.log("Expense created:", expense);
    res.json(expense);
  } catch (err) {
    console.error(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  await Expense.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json("Deleted");
    })
    .catch((err) => console.log(err));
};
