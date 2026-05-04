export const validateUsername = (value: string): string | null => {
  if (value.length < 3) return "To trochę za krótka nazwa";

  if (/\s/.test(value)) return "Usuń spacje z nazwy";

  if (!/^[a-zA-Z]/.test(value)) return "Zacznij nazwę od litery";

  if (!/^[a-zA-Z0-9]+$/.test(value)) return "Użyj tylko liter i cyfr";

  return null;
};
