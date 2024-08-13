db.users.updateMany(

    {
        country: { $nin: 'china' },
        is_blocked: { $ne: true },
        balance: { $gt: 0 }
    },
    { $mul: { balance: .155 } }
)