db.users.aggregate([
    { $match: { country: { $in: [ "China", "USA", "France"] } } },
    { $sort: { balance: -1 } },
    { $project: { fullname: 1, balance: 1, _id: 0 } }
])