if (e) {
    if (t.data = Object.assign({}, e), t.rarity >= 4 && 1 !== t.level) {
        var i = t.data.upgradeTable[t.level - 1];
        t.data.attack += i.attack
        t.data.live += i.live
        t.data.defense += i.defense
        t.data.fatal += i.fatal
        t.data.recover += i.recover
    }
    t.data.attack = 1.1 * t.data.attack
    t.data.live += t.computingPower / 5
    t.data.attack += t.computingPower / 25
    t.data.defense += t.computingPower / 25
    t.data.fatal += 1e-4 * t.computingPower
    t.data.recover += 1e-4 * t.computingPower
    t.data.power = 1 * t.data.live + 10 * t.data.attack + 10 * t.data.defense + 10 * t.data.fatal + 1e3 * t.data.recover
    t.data.power = parseInt(t.data.power)
    t.data.attack = parseInt(t.data.attack)
    t.data.live = parseInt(t.data.live)
    t.data.defense = parseInt(t.data.defense)
    t.data.fatal = t.data.fatal.toFixed(3)
    t.data.recover = t.data.recover.toFixed(3)
}
