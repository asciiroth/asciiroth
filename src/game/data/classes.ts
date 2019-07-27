import { Classes } from '../enums/Classes.enum';

export const ClassData = {
    [Classes.Priest]: {
        description: 'Priests are Light-wielding magic users, devout to the Light.',
		image: 'http://img00.deviantart.net/c30d/i/2009/114/e/c/wow___angel_by_isuna.jpg',
		// todo: spells
		// spells: [
        //     {
        //         reference: 'smite',
        //         level: 1,
        //         spellFamily: 'Smite',
        //         calculateDamage(playerInt: number, enemyMagicDef: number = 1) {
        //             return (playerInt * 1.2) * (enemyMagicDef / 2);
        //         }
        //     },
        // ],
    },
	[Classes.Warrior]: {
        description: 'Warriors are experts in weaponry and close-quarters combat.',
		image: 'https://i.pinimg.com/originals/1f/a8/86/1fa88608ce4639beb35f0e3dca992643.jpg',
    },
	[Classes.Mage]: {
        description: 'Mages, highly intelligent and powerful magic users. Prefer to keep enemies at a distance.',
		image: 'https://i.pinimg.com/originals/43/c4/0c/43c40cb7fe96f92ce294790a428e9596.jpg',
    },
	[Classes.Warlock]: {
        description: 'Warlocks are shrouded in mystery and renown, they toe a dangerous line with death and demons.',
		image: 'https://i.redd.it/f2nrd4tcl9s01.jpg',
    },
	[Classes.Hunter]: {
        description: 'Hunters are masters of the land, experts in all animals and their surroundings, and often a damn good shot.',
		image: 'https://i.pinimg.com/originals/d5/2f/96/d52f96342070913f4e34339bcb09676b.jpg',
    },
	[Classes.Paladin]: {
        description: 'Paladins fight for the glory of the Light to bring order and justice. Justice ain\t gunna dispense itself.',
		image: 'https://i.imgur.com/TgocG8E.jpg',
    },
	[Classes.Druid]: {
        description: 'Druids are one with the world they live in, the animals they meet, the plants they touch, the air they breathe.',
		image: 'https://omfgsoup.files.wordpress.com/2014/05/world_of_warcraft_tcg___moonkin_by_murph3-d6fggpd.jpg',
    },
	[Classes.Shaman]: {
        description: 'Shamans have a cruel legacy of pain and healing. Using totems, they bend the elements themselves to their will.',
		image: 'https://i.pinimg.com/originals/fd/04/b4/fd04b40abe80451b3decac05b292a230.jpg',
    },
	[Classes.Rogue]: {
        description: 'Silent, hidden, swift and cunning. Rogues are assasins, using stealth, poison, cloaks and daggers to dispatch their enemies - for themselves, or their employer.',
		image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4b72ee1-006a-49b8-80f9-8564227dfda5/d9o33at-8fda8329-1ee7-474b-8069-2e614054d81b.jpg/v1/fill/w_1192,h_670,q_70,strp/rogue_world_of_warcraft_by_sayta0_d9o33at-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjRiNzJlZTEtMDA2YS00OWI4LTgwZjktODU2NDIyN2RmZGE1XC9kOW8zM2F0LThmZGE4MzI5LTFlZTctNDc0Yi04MDY5LTJlNjE0MDU0ZDgxYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5-8WMHYcbroeYYrcMVxUHa52XGTnOIM5uCDj9DN9XU8',
    },
}
