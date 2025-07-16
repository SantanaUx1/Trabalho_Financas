import { useEffect } from 'react';
import FormularioTransacao from './FormularioTransacao';
import { Transacao } from '../hooks/useTransacoes';

interface ModalProps {
  aberto: boolean;
  transacaoEditando?: Transacao | null;
  onSalvar: (dados: any) => Promise<boolean>;
  onEditar: (id: string, dados: Partial<Transacao>) => Promise<boolean>;
  onCancelar: () => void;
}

const ModalTransacao = ({ aberto, transacaoEditando, onSalvar, onEditar, onCancelar }: ModalProps) => {
  useEffect(() => {
    if (aberto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
          onClick={onCancelar}
        >
          ✕
        </button>

        <FormularioTransacao
          transacaoEditando={transacaoEditando}
          onSalvar={onSalvar}
          onEditar={onEditar}
          onCancelar={onCancelar}
        />
      </div>
    </div>
  );
};

export default ModalTransacao;
