import { ThemeToggle } from '@/components/ThemeToggle';
import { navigationItems, profile } from '@/data/constants';

export const Header = () => (
  <header className="bg-background/85 sticky top-0 z-20 border-b backdrop-blur select-none">
    <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
      <a className="font-semibold" href="#inicio">
        {profile.name}
      </a>

      <nav className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            className="hover:text-foreground transition"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </div>
  </header>
);
