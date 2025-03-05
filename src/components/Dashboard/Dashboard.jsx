export const Dashboard = () => {
  return (
    <div>
      <h1 data-testid="h1">Welcome to the Dashboard</h1>
      <button>Click me!</button>
      <input placeholder="Enter your email" />
    </div>
  );
};

// Testas
// 1. Patikriname ar komponentas atvaizduoja h1 teksta
// 2. Patikriname ar komponentas atvaizduoja mygtuka
// 3. Patikriname ar komponentas atvaizduoja input elementa

// Reikia panaudoti .toBeInTheDocument() metoda
