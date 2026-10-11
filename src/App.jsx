import React from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bell, CalendarDays, Check,
  ChevronDown, CircleHelp, Clock3, Command, FileText, FolderKanban,
  LayoutGrid, MoreHorizontal, Plus, Search, Settings2, Sparkles,
  UsersRound, WandSparkles
} from 'lucide-react';

const projects = [
  { name: 'Sunday Rituals', type: 'Brand identity', date: 'Due Oct 18', progress: 76, color: 'lavender', symbol: '✳', people: ['AM','JR','SK'], caption: 'A softer start to every day', shape: 'sun' },
  { name: 'Form & Field', type: 'Digital experience', date: 'Due Oct 22', progress: 42, color: 'peach', symbol: '◒', people: ['JR','ML'], caption: 'Made for the everyday', shape: 'form' },
  { name: 'Common Ground', type: 'Campaign · Social', date: 'Due Oct 28', progress: 28, color: 'blue', symbol: '✳', people: ['AM','SK','ML'], caption: 'Better things grow together', shape: 'ground' },
];
const activity = [
  { initials:'JR', name:'Jamie Rivera', action:'added a comment to', item:'Sunday Rituals', time:'12 min ago', color:'coral' },
  { initials:'ML', name:'Morgan Lee', action:'shared a new file in', item:'Form & Field', time:'1 hour ago', color:'blue' },
  { initials:'SK', name:'Sam Kim', action:'completed a task in', item:'Common Ground', time:'3 hours ago', color:'green' },
];
function Mark(){return <div className="brand-mark"><span>m</span><i /></div>}
function Avatar({label, tone=''}){return <span className={`avatar ${tone}`}>{label}</span>}
function SectionTitle({children, action}){return <div className="section-title"><h2>{children}</h2>{action&&<button className="text-button">{action}<ArrowRight size={14}/></button>}</div>}
function ProjectCard({project}){
  return <article className="project-card">
    <div className={`project-art ${project.color}`}>
      <div className="art-top"><span className="art-label">{project.type}</span><button className="dots" aria-label="More options"><MoreHorizontal size={19}/></button></div>
      <div className={`art-shape ${project.shape}`}><span>{project.symbol}</span></div>
      <div className="art-caption">{project.caption}</div>
      <div className="art-index">0{projects.indexOf(project)+1} <span>/ 03</span></div>
    </div>
    <div className="project-info"><div><h3>{project.name}</h3><p>{project.date}</p></div><button className="open-project" aria-label="Open project"><ArrowUpRight size={17}/></button></div>
    <div className="project-progress"><div className="progress-track"><i style={{width:`${project.progress}%`}}/></div><span>{project.progress}%</span></div>
    <div className="project-team"><div className="avatar-stack">{project.people.map((p,i)=><Avatar key={p} label={p} tone={`tone-${i}`}/>)}</div><span className="team-caption">{project.people.length} collaborators</span><span className="status-pill"><span/>In progress</span></div>
  </article>
}
function App(){
 return <div className="app-shell">
   <aside className="sidebar">
    <div className="brand"><Mark/><span>morrow</span><ChevronDown size={14} className="brand-chevron"/></div>
    <button className="workspace-switch"><span className="workspace-dot">S</span><span className="workspace-copy"><b>Studio North</b><small>Free workspace</small></span><ChevronDown size={15}/></button>
    <div className="side-label">WORKSPACE</div>
    <nav className="side-nav"><button className="nav-item selected"><LayoutGrid size={17}/><span>Overview</span></button><button className="nav-item"><FolderKanban size={17}/><span>Projects</span><span className="nav-count">8</span></button><button className="nav-item"><CalendarDays size={17}/><span>My calendar</span></button><button className="nav-item"><FileText size={17}/><span>Resources</span></button></nav>
    <div className="side-label project-label">YOUR PROJECTS <button aria-label="Add project"><Plus size={14}/></button></div>
    <nav className="side-nav project-nav"><button className="nav-item"><i className="project-dot dot-lilac"/><span>Sunday Rituals</span></button><button className="nav-item"><i className="project-dot dot-peach"/><span>Form & Field</span></button><button className="nav-item"><i className="project-dot dot-blue"/><span>Common Ground</span></button><button className="nav-item muted"><span className="add-project"><Plus size={14}/></span><span>New project</span></button></nav>
    <div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-icon"><Sparkles size={15}/></div><b>A little more room?</b><p>Upgrade your space and make room for big ideas.</p><button>Explore plans <ArrowRight size={13}/></button><div className="upgrade-orb"/></div><button className="nav-item bottom-link"><CircleHelp size={17}/><span>Help & feedback</span></button><button className="profile"><Avatar label="AM" tone="profile-avatar"/><span><b>Alex Morgan</b><small>Studio admin</small></span><MoreHorizontal size={18}/></button></div>
   </aside>
   <main className="main-content">
    <header className="topbar"><div className="crumb"><span>Workspace</span><span className="crumb-slash">/</span><b>Overview</b></div><div className="top-actions"><button className="search-trigger"><Search size={16}/><span>Search anything...</span><kbd><Command size={11}/> K</kbd></button><button className="top-icon" aria-label="Notifications"><Bell size={17}/><i className="notification-dot"/></button><span className="top-divider"/><button className="invite-button"><UsersRound size={15}/> Invite team</button></div></header>
    <div className="page-wrap">
     <section className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-line"/> SATURDAY, OCTOBER 11, 2026</div><h1>A good day to make<br/><em>something meaningful.</em></h1><p className="welcome-sub">A little progress adds up. Here’s what’s happening in your studio.</p></div><div className="welcome-actions"><button className="outline-button"><CalendarDays size={15}/> View calendar</button><button className="primary-button"><Plus size={16}/> New project</button></div><div className="hero-sun"><div className="sun-ring ring-1"/><div className="sun-ring ring-2"/><span>✳</span></div></section>
     <section className="stat-row"><div className="stat-card"><div className="stat-icon lilac-icon"><FolderKanban size={17}/></div><div className="stat-name">Active projects</div><div className="stat-value">08 <span className="stat-change"><ArrowUpRight size={13}/> 2 this month</span></div><div className="stat-foot">Across your whole studio</div></div><div className="stat-card"><div className="stat-icon peach-icon"><Clock3 size={17}/></div><div className="stat-name">Hours this week</div><div className="stat-value">32.5 <span className="stat-unit">hrs</span></div><div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="bar-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div><div className="stat-card deadline-card"><div className="stat-icon green-icon"><Check size={17}/></div><div className="stat-name">Next deadline</div><div className="stat-value deadline-value">Sunday Rituals</div><div className="deadline-foot"><span className="deadline-date">OCT 18</span><span className="deadline-in">7 days to go</span><div className="deadline-progress"><i/></div></div></div></section>
     <section className="projects-section"><SectionTitle action="All projects">Your projects <span className="section-count">03</span></SectionTitle><div className="project-grid">{projects.map(p=><ProjectCard key={p.name} project={p}/>)}</div></section>
     <section className="lower-grid"><div className="activity-panel"><SectionTitle action="View activity">Recent activity</SectionTitle><div className="activity-list">{activity.map((a,i)=><div className="activity-item" key={a.name}><Avatar label={a.initials} tone={a.color}/><div className="activity-copy"><p><b>{a.name}</b> {a.action} <strong>{a.item}</strong></p><span>{a.time}</span></div>{i===0&&<span className="activity-new"/>}</div>)}</div></div><div className="focus-panel"><div className="focus-top"><div className="focus-icon"><WandSparkles size={16}/></div><span>YOUR FOCUS</span><button aria-label="Settings"><Settings2 size={16}/></button></div><h3>Make space<br/>for deep work.</h3><p>You've protected <b>4.5 hours</b> for focused work this week. Keep that momentum going.</p><div className="focus-bottom"><div className="focus-avatars"><Avatar label="AM" tone="profile-avatar"/><span>just you, for now</span></div><button aria-label="Open focus"><ArrowUpRight size={16}/></button></div><div className="focus-decoration">✳</div></div></section>
     <footer><span>Made with intention <span className="heart">♥</span> in your studio</span><span>Everything is looking lovely <span className="sparkle">✦</span></span></footer>
    </div>
   </main>
 </div>
}
export default App;
