
export default function extractAttacks(person) {
  const { special } = person;
  const attacks = [];
  for (const attack of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = attack;
    const attackOptions = {};
    attackOptions.id = id;
    attackOptions.name = name;
    attackOptions.icon = icon;
    attackOptions.description = description;
    attacks.push(attackOptions);
  }
  return attacks;
}
