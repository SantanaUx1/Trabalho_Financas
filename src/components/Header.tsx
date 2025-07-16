import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { usuario, sair } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-800">
              💸 Finanças Pessoais
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={usuario?.photoURL || 'https://placehold.co/32x32/png'}
                alt="Foto do usuário"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700 font-medium hidden sm:block">
                {usuario?.displayName}
              </span>
            </div>
            
            <button
              onClick={sair}
              className="text-gray-600 hover:text-red-600 font-medium transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;