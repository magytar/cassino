'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Home, Gift, Share2, CreditCard, User, Star, Plus, MessageCircle, X } from 'lucide-react';

import Img_delights from "./imgs/delights.png"
import Img_dragon from "./imgs/dragon.png"
import Img_mouse from "./imgs/mouse.png"
import Img_ox from "./imgs/ox.png"
import Img_rabbit from "./imgs/rabbit.png"
import Img_tiger from "./imgs/tiger.png"
import Img_snake from "./imgs/snake.png"
import Img_dreams from "./imgs/dreams.png"
import Img_crazy from "./imgs/crazy.png"
import Img_fantasia from "./imgs/fantasia.png"
import Img_ganesha from "./imgs/ganesha.png"
import Img_mania from "./imgs/mania.png"
import Img_soccer from "./imgs/soccer.png"
import Img_neko from "./imgs/neko.png"
import Img_safari from "./imgs/safari.png"

import Img_banner from "./imgs/banner.png"

export default function MontanhaCassino() {
  const [currentJackpot, setCurrentJackpot] = useState(1356920.00);
  const [showAgeModal, setShowAgeModal] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", phone: "" });
  const [tab, setTab] = useState("login")
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentJackpot(prev => prev + Math.random() * 1000);
    }, 250);
    return () => clearInterval(timer);
  }, []);

  function verifica() {
    if(!logado){
      setOpen(true)
    }
  }


  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // exemplo simples: salvar no localStorage (não recomendado para senhas em produção)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));
    setOpen(false);
    setForm({ username: "", password: "", phone: "" });
    alert("Registro realizado (exemplo). Verifique o localStorage.");
  }

  function handleRegister(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username: form.username, password: form.password, phone: form.phone, createdAt: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro realizado (exemplo). Verifique o localStorage.");
    setOpen(false);
    setForm({ username: "", password: "", phone: "" });
  }


function handleLogin(e) {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === form.username && u.password === form.password);
  if (user) {
  alert("Login realizado com sucesso!");
  setOpen(false);
  setLogado(true)
  } else {
  alert("Usuário ou senha inválidos.");
  }
  }

  const popularGames = [
    {
      id: 1,
      name: "Fortune Tiger",
      provider: "PG SOFT",
      img:Img_tiger
    },
    {
      id: 2,
      name: "FORTUNE RABBIT",
      provider: "PG SOFT",
      img:Img_rabbit
    },
    {
      id: 3,
      name: "FORTUNE OX",
      provider: "PG SOFT",
      img:Img_ox
    },
    ,
    {
      id: 4,
      name: "CASH MANIA",
      provider: "PG SOFT",
      img:Img_mania
    },
    {
      id: 5,
      name: "FORTUNE DRAGON",
      provider: "PG SOFT",
      img:Img_dragon
    },
    {
      id: 6,
      name: "FORTUNE MOUSE",
      provider: "PG SOFT",
      img:Img_mouse
    },
    ,
    {
      id: 7,
      name: "GANESHA FORTUNE",
      provider: "PG SOFT",
      img:Img_ganesha
    },
    {
      id: 8,
      name: "CANDY DELIGHTS",
      provider: "PG SOFT",
      img:Img_delights
    },
    {
      id: 9,
      name: "FORTUNE SNAKE",
      provider: "PG SOFT",
      img:Img_snake
    },
    ,
    {
      id: 10,
      name: "THREE CRAZY",
      provider: "PG SOFT",
      img:Img_crazy
    },
    {
      id: 11,
      name: "DREAMS OF MACAU",
      provider: "PG SOFT",
      img:Img_dreams
    },
    {
      id: 12,
      name: "RIO FANTASIA",
      provider: "PG SOFT",
      img:Img_fantasia
    },
    {
      id: 13,
      name: "SHAOLIN SOCCER",
      provider: "PG SOFT",
      img:Img_soccer
    },
    {
      id: 14,
      name: "LUCKY NEKO",
      provider: "PG SOFT",
      img:Img_neko
    },
    {
      id: 15,
      name: "SAFARI WILDS",
      provider: "PG SOFT",
      img:Img_safari
    }
  ];

  const handleAgeConfirmation = (isOver18) => {
    if (isOver18) {
      setShowAgeModal(false);
    } else {
      alert("Você deve ter pelo menos 18 anos para acessar este site.");
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <>
      {/* Age Verification Modal */}
      {showAgeModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-red-600">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎰</div>
              <h2 className="text-2xl font-bold text-white mb-2">Verificação de Idade</h2>
              <p className="text-red-200 mb-6">
                Você deve ter pelo menos 18 anos para acessar este site de jogos.
              </p>
              <div className="text-lg font-semibold text-yellow-400 mb-6">
                Você tem 18 anos ou mais?
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => handleAgeConfirmation(true)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ✓ Sim, tenho 18+
              </button>
              <button
                onClick={() => handleAgeConfirmation(false)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ✗ Não
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-red-300">
                Este site é destinado apenas para maiores de 18 anos. Jogue com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            aria-hidden
          >
            <div className="w-full h-full backdrop-blur-sm" />
          </div>

          {/* modal box */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Modal de autenticação"
            className="relative z-10 w-full max-w-md mx-4 rounded-2xl shadow-2xl"
          >
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(220,38,38,0.12)",
                border: "1px solid rgba(220,38,38,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-red-900">
                  {tab === "login" ? "Login" : "Registrar"}
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar modal"
                  className="text-red-900/70 hover:text-red-900"
                >
                  ✕
                </button>
              </div>

              {/* Troca de abas */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => setTab("login")}
                  className={`px-3 py-1 rounded-md text-sm ${tab === "login" ? "bg-red-700 text-white" : "bg-white/70 text-red-900"}`}
                >
                  Login
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`px-3 py-1 rounded-md text-sm ${tab === "register" ? "bg-red-700 text-white" : "bg-white/70 text-red-900"}`}
                >
                  Registro
                </button>
              </div>

              {tab === "login" ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm text-red-900/90 mb-1" htmlFor="username">Usuário</label>
                    <input
                      id="username"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-red-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="nome de usuário"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-red-900/90 mb-1" htmlFor="password">Senha</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                      className="w-full px-3 py-2 rounded-md border border-red-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="mínimo 6 caracteres"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 rounded-md bg-white/60 border border-red-200 text-red-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md bg-red-700 text-white shadow-sm hover:bg-red-800"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm text-red-900/90 mb-1" htmlFor="username">Usuário</label>
                    <input
                      id="username"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-red-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="nome de usuário"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-red-900/90 mb-1" htmlFor="password">Senha</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                      className="w-full px-3 py-2 rounded-md border border-red-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="mínimo 6 caracteres"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-red-900/90 mb-1" htmlFor="phone">Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9+()\-\s]{8,}"
                      className="w-full px-3 py-2 rounded-md border border-red-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="(99) 9 9999-9999"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 rounded-md bg-white/60 border border-red-200 text-red-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md bg-red-700 text-white shadow-sm hover:bg-red-800"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              )}

              <p className="text-xs text-red-900/70 mt-4">Atenção: este é um exemplo. Nunca salve senhas em localStorage em produção.</p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 text-white overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-red-900/80 backdrop-blur-sm">
          
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
              <div className="w-6 h-8 bg-black-600 rounded flex items-center justify-center text-white font-bold text-xs">
                N 1
              </div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 w-24 font-bold text-lg">CASSINO ZETA</div>
              <div className="flex text-yellow-400 text-xs">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>
          {logado ? (
            <div className="flex items-center gap-2">
  <h1 className="text-sm text-green-500 bg-green-100/20 px-2 py-0.5 rounded-md shadow-sm w-max">
    R$0
  </h1>
  <button className="bg-yellow-500 hover:bg-blue-600 text-white text-sm px-2 py-0.5 rounded-md shadow-sm transition-colors">
    Recarregar
  </button>
</div>
            

          ): (
            <div className="flex space-x-2">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm" onClick={() => setOpen(true)}>
              Login
            </button>
            <button className="bg-transparent border border-red-400 text-red-300 px-4 py-2 rounded-full font-semibold text-sm" onClick={() => setOpen(true)}>
              Registro
            </button>
          </div>
          )}

        </header>

        {/* Convite Banner */}
        

<div className="mx-4 mt-4 mb-4 relative overflow-hidden rounded-2xl w-full h-[200px]">
  <Image
    src={Img_banner}   // sua imagem aqui
    alt="Banner"
    fill
    style={{ objectFit: "cover" }}
    className="transition-transform duration-500 hover:scale-105"
  />
</div>

        {/* Jackpot Banner */}
        <div className="mx-4 mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute top-2 left-4 text-6xl opacity-20">🎰</div>
            <div className="absolute bottom-2 right-4 text-4xl opacity-20">💰</div>
          </div>
          
          <div className="relative p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-3xl">💎</span>
              <h2 className="text-3xl font-black text-yellow-300 tracking-wider">JACKPOT</h2>
              <span className="text-3xl">🎯</span>
            </div>
            
            <div className="bg-red-700 rounded-lg p-1 mb-2 shadow-inner">
              <div className="text-3xl font-black text-yellow-300 tracking-wider">
                {currentJackpot.toLocaleString('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL',
                  minimumFractionDigits: 2 
                })}
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🐷</span>
              <span className="text-2xl">🎪</span>
            </div>
          </div>
        </div>

        {/* Aviso */}
        <div className="mx-4 mb-6 bg-red-800/50 rounded-lg p-3 flex items-center space-x-3">
          <div className="text-2xl">📢</div>
          <div className="flex-1">
            <p className="text-sm text-red-200">
              Apenas o nome verdadeiro do pagador e um CPF válido. O não cumprimento resultará em...
            </p>
          </div>
          <div className="text-2xl">🎁</div>
        </div>

        {/* Navigation Tabs */}
        {/* Popular Section */}
        <div className="mx-4 mb-6">
  <div className="flex items-center space-x-2 mb-4">
    <div className="text-2xl">🔥</div>
    <h3 className="text-xl font-bold text-orange-400">Popular</h3>
  </div>

  <div className="flex flex-wrap gap-4 flex items-center justify-center">
    {popularGames.map((game) => (
      <div onClick={() => verifica()}
        key={game.id}
        className="relative group rounded-xl p-1 shadow-lg overflow-hidden w-full max-w-[120px] h-130 max-h-[150px]"
      >
        {/* Imagem de fundo usando Next.js Image */}
        <div className="absolute inset-0 h-[150px]">
          <Image
            src={game.img}
            alt={game.provider}
            fill
            style={{ objectFit: "cover", height:"100%" }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradiente/blur */}
          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:backdrop-blur-sm"></div>
        </div>

        {/* Conteúdo acima da imagem */}
        <div className="relative h-[120px] flex items-center justify-center">
          {/* Provider badge */}
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
            {game.provider}
          </div>

          {/* Star button */}
          <div className="absolute top-2 right-2 bg-black/70 p-1 rounded-full z-10">
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-24 right-4 z-50">
          <button className="bg-green-500 p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-red-900 border-t border-red-700 p-2">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center space-y-1 py-2 px-4">
              <Home className="w-6 h-6 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-semibold">Início</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 py-2 px-4" onClick={() => verifica()}>
              <Gift className="w-6 h-6 text-red-300" />
              <span className="text-xs text-red-300">Promoção</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 py-2 px-4" onClick={() => verifica()}>
              <Share2 className="w-6 h-6 text-red-300" />
              <span className="text-xs text-red-300">Agente</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 py-2 px-4" onClick={() => verifica()}>
              <CreditCard className="w-6 h-6 text-red-300" />
              <span className="text-xs text-red-300">Depósito</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 py-2 px-4" onClick={() => verifica()}>
              <User className="w-6 h-6 text-red-300" />
              <span className="text-xs text-red-300">Perfil</span>
            </div>
          </div>
        </nav>

        {/* Spacer for bottom nav */}
        <div className="h-20"></div>
      </div>
    </>
  );
}