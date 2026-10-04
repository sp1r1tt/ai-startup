'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Instagram, Menu, Play, Sparkles, X } from 'lucide-react'

type Creator = {
  name: string
  handle: string
  role: string
  image: string
  accent: string
  bio: string
  posts: string[]
  metric: string
}

const creators: Creator[] = [
  {
    name: 'Alex N.',
    handle: '@alex.neural',
    role: 'AI / Будущее работы',
    image: '/avatars/alex.png',
    accent: '#7c8cff',
    bio: 'Разбирает технологии, которые меняют то, как мы думаем, создаём и работаем.',
    posts: ['Как AI меняет команды', 'Будущее уже в бете', '5 инструментов для фокуса'],
    metric: '184K подписчиков',
  },
  {
    name: 'Marcus Ray',
    handle: '@marcus.moves',
    role: 'Путешествия / Движение',
    image: '/avatars/marcus.png',
    accent: '#ffad62',
    bio: 'Городские маршруты, энергия движения и места, о которых хочется рассказать.',
    posts: ['48 часов в Токио', 'Движение как привычка', 'Собираю рюкзак'],
    metric: '96K подписчиков',
  },
  {
    name: 'Lina Park',
    handle: '@lina.form',
    role: 'Мода / Дизайн',
    image: '/avatars/lina.png',
    accent: '#7de6de',
    bio: 'Находит форму в шуме: современный стиль, предметы и визуальная культура.',
    posts: ['Тихая роскошь 2.0', 'Форма следует функции', 'Мой visual diary'],
    metric: '221K подписчиков',
  },
  {
    name: 'Sofia Vale',
    handle: '@sofia.signal',
    role: 'Баланс / Культура',
    image: '/avatars/sofia.png',
    accent: '#f48cac',
    bio: 'Осознанные ритуалы, культура и маленькие детали, из которых складывается жизнь.',
    posts: ['Утро без спешки', 'Что я читаю сейчас', 'Ритм большого города'],
    metric: '142K подписчиков',
  },
]

export default function Page() {
  const [selected, setSelected] = useState<Creator | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  function handleHeroPointerMove(event: React.PointerEvent<HTMLElement>) {
    const hero = heroRef.current
    if (!hero) return
    const bounds = hero.getBoundingClientRect()
    hero.style.setProperty('--orb-x', `${event.clientX - bounds.left}px`)
    hero.style.setProperty('--orb-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090c] text-[#f3f1ee]">
      <div className="noise" aria-hidden="true" />
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em]">
          <span className="grid size-8 place-items-center rounded-full bg-[#f3f1ee] text-[#08090c]"><Sparkles size={15} /></span>
          <span>signal<span className="text-[#8793ff]">/</span>people</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#94959d] md:flex">
          <a href="#creators" className="transition-colors hover:text-white">Персонажи</a>
          <a href="#manifesto" className="transition-colors hover:text-white">Манифест</a>
          <a href="#contact" className="transition-colors hover:text-white">Контакты</a>
        </nav>
        <a href="https://t.me" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:border-white/40 md:block">Telegram <ArrowUpRight className="ml-1 inline" size={14} /></a>
        <button aria-label="Open menu" className="rounded-full border border-white/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        {menuOpen && <div className="absolute left-5 right-5 top-[68px] rounded-2xl border border-white/10 bg-[#15161b] p-4 shadow-2xl md:hidden"><div className="flex flex-col gap-4 text-sm text-[#c4c4ca]"><a href="#creators" onClick={() => setMenuOpen(false)}>Персонажи</a><a href="#manifesto" onClick={() => setMenuOpen(false)}>Манифест</a><a href="https://t.me" target="_blank" rel="noreferrer">Telegram <ArrowUpRight className="ml-1 inline" size={14} /></a></div></div>}
      </header>

      <section ref={heroRef} id="top" onPointerMove={handleHeroPointerMove} className="hero-section relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="hero-orb" aria-hidden="true" />
        <div className="relative max-w-4xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#8f96ff]"><span className="h-px w-8 bg-[#8f96ff]" />Новое поколение влияния</p>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">Люди, <span className="gradient-text">создающие будущее.</span></h1>
<p className="mt-8 max-w-xl text-lg leading-relaxed text-[#a7a7af] sm:text-xl">Витрина цифровых персонажей, которые создают идеи, вдохновение и разговоры нового поколения.</p>
  <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#creators" className="rounded-full bg-[#f3f1ee] px-6 py-3.5 text-sm font-semibold text-[#08090c] transition-transform hover:-translate-y-0.5">Исследовать персонажей <ArrowUpRight className="ml-1 inline" size={16} /></a><span className="text-sm text-[#6f7078]">04 уникальных персонажа / 01 вселенная</span></div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-3 text-xs text-[#767780] sm:mt-28 sm:grid-cols-4"><div className="border-t border-white/10 pt-3">01 — ИДЕЯ</div><div className="border-t border-white/10 pt-3">02 — ОБРАЗ</div><div className="border-t border-white/10 pt-3">03 — КУЛЬТУРА</div><div className="border-t border-white/10 pt-3">04 — ПЕРСОНАЖ</div></div>
      </section>

      <section id="creators" className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between"><div><p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#777984]">Коллекция</p><h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Знакомьтесь с блогерами.</h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#777984] sm:block">Четыре голоса. Четыре взгляда. Один новый digital world.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{creators.map((creator, index) => <button key={creator.handle} onClick={() => setSelected(creator)} className="creator-card group text-left" style={{ '--accent': creator.accent } as React.CSSProperties}><div className="relative aspect-[0.79] overflow-hidden rounded-[1.4rem] bg-[#191a20]"><img src={creator.image} alt={`${creator.name}, ${creator.role}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-90" /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] backdrop-blur-sm">0{index + 1} / 04</span><span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/10 opacity-0 backdrop-blur transition group-hover:opacity-100"><ArrowUpRight size={16} /></span><div className="absolute bottom-0 w-full p-5"><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em]" style={{ color: creator.accent }}>{creator.role}</p><h3 className="text-2xl font-medium tracking-[-0.04em]">{creator.name}</h3><p className="mt-1 text-sm text-[#babac0]">{creator.handle}</p></div></div><div className="flex items-center justify-between px-1 pt-3 text-sm text-[#898a93]"><span>{creator.metric}</span><span className="text-[#f3f1ee]">Открыть профиль <ArrowUpRight className="ml-1 inline" size={14} /></span></div></button>)}</div>
      </section>

      <section id="live-signals" className="signal-lab border-y border-white/10 bg-[#0a0b10] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto max-w-[1440px]"><div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#777984]">Прямой эфир</p><h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Персонажи в действии.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#85868e]">Наблюдайте, как идеи превращаются в разговоры — прямо сейчас.</p></div><div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]"><div className="signal-console relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11131a] p-6 sm:p-8"><div className="signal-grid" aria-hidden="true" /><div className="relative z-10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#777984]"><span>Система активна</span><span className="flex items-center gap-2 text-[#8f96ff]"><span className="size-2 animate-pulse rounded-full bg-[#8f96ff]" />Live</span></div><div className="relative z-10 mt-16 max-w-md"><p className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">Каждый взгляд может стать новой точкой входа.</p><p className="mt-4 text-sm leading-relaxed text-[#85868e]">Выберите профиль, чтобы открыть его контекст, последние публикации и авторский взгляд.</p></div><div className="signal-wave" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div></div><div className="flex flex-col gap-4"><div className="signal-stat flex-1 rounded-[1.5rem] border border-white/10 bg-[#15161c] p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#777984]">В фокусе</p><p className="mt-8 text-5xl font-medium tracking-[-0.07em] text-[#f3f1ee]">12.8K</p><p className="mt-2 text-sm text-[#85868e]">человек сейчас изучают контент</p></div><div className="rounded-[1.5rem] border border-[#8f96ff]/30 bg-[#7f8aff]/10 p-6"><div className="flex items-center justify-between"><p className="text-xs uppercase tracking-[0.18em] text-[#aab0ff]">Следующий разговор</p><span className="text-lg text-[#aab0ff]">↗</span></div><p className="mt-5 text-xl font-medium">AI и интуиция</p><p className="mt-2 text-sm text-[#9b9eaf]">София Вейл · через 14 минут</p></div></div></div></div></section>

      <section id="manifesto" className="border-y border-white/10 bg-[#0c0d11] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><p className="text-xs uppercase tracking-[0.2em] text-[#777984]">Наш взгляд</p><div><p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">“Лучшие цифровые личности не заменяют связь. <span className="text-[#747681]">Они помогают чувствовать её сильнее.”</span></p><div className="mt-8 flex items-center gap-3 text-sm text-[#85868e]"><span className="size-2 rounded-full bg-[#8f96ff]" />Signal/People studio, 2026</div></div></div></section>

      <footer id="contact" className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12"><div><p className="text-xl font-medium tracking-[-0.03em]">signal<span className="text-[#8793ff]">/</span>people</p><p className="mt-2 text-sm text-[#696a72]">Живая галерея цифровых идентичностей.</p></div><a href="https://t.me" target="_blank" rel="noreferrer" className="w-fit rounded-full bg-[#7f8aff] px-5 py-3 text-sm font-semibold text-[#08090c] transition hover:bg-[#a0a8ff]">Перейти в Telegram <ArrowUpRight className="ml-1 inline" size={15} /></a></footer>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-md" onClick={() => setSelected(null)}><div role="dialog" aria-modal="true" aria-labelledby="profile-title" className="profile-modal max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[1.5rem] border border-white/15 bg-[#15161b]" onClick={(event) => event.stopPropagation()}><div className="grid md:grid-cols-[0.8fr_1.2fr]"><div className="relative min-h-[360px] md:min-h-full"><img src={selected.image} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-transparent to-transparent md:bg-gradient-to-r" /></div><div className="relative p-7 sm:p-10"><button aria-label="Close profile" onClick={() => setSelected(null)} className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-[#a7a7af] hover:text-white"><X size={18} /></button><p className="text-xs uppercase tracking-[0.2em]" style={{ color: selected.accent }}>{selected.role}</p><h2 id="profile-title" className="mt-4 text-4xl font-medium tracking-[-0.05em]">{selected.name}</h2><p className="mt-1 text-[#83848d]">{selected.handle}</p><p className="mt-8 text-lg leading-relaxed text-[#c9c9ce]">{selected.bio}</p><div className="mt-8 border-t border-white/10 pt-6"><p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#777984]">Последние сигналы</p><div className="space-y-3">{selected.posts.map((post, index) => <div key={post} className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm"><span className="grid size-7 place-items-center rounded-full bg-white/10 text-xs text-[#a5a6ad]">0{index + 1}</span>{post}<Play className="ml-auto text-[#858cff]" size={14} fill="currentColor" /></div>)}</div></div><a href="https://t.me" target="_blank" rel="noreferrer" className="mt-8 block rounded-full bg-[#f3f1ee] px-5 py-3.5 text-center text-sm font-semibold text-[#08090c]">Открыть в Telegram <ArrowUpRight className="ml-1 inline" size={15} /></a></div></div></div></div>}
    </main>
  )
}
