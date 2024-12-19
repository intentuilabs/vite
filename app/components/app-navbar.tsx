import {
  IconArrowUpRight,
  IconBrandJustd,
  IconChevronLgDown,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield,
  IconShoppingBag,
} from "justd-icons";
import { Avatar, Button, Menu, Navbar, Separator } from "~/components/ui";
import { ThemeSwitcher } from "./theme-switcher";

export default function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
  return (
    <Navbar {...props}>
      <Navbar.Nav>
        <Navbar.Logo href="/docs/2.x/components/layouts/navbar">
          <IconBrandJustd className="size-6 sm:size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="/">Home</Navbar.Item>
          <Navbar.Item href="/about">About</Navbar.Item>
          <Menu>
            <Navbar.Item>
              Resources <IconChevronLgDown data-slot="chevron" />
            </Navbar.Item>
            <Menu.Content items={categories}>
              {(item) => (
                <Menu.Item id={item.id} textValue={item.label} href={item.url}>
                  {item.label} <IconArrowUpRight className="ml-auto size-4" />
                </Menu.Item>
              )}
            </Menu.Content>
          </Menu>
        </Navbar.Section>

        <Navbar.Section className="hidden ml-auto md:flex">
          <Navbar.Flex className="sm:gap-x-1">
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
            <ThemeSwitcher appearance="plain" />
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 sm:mx-1" />
          <Navbar.Logo href="/docs/2.x/components/layouts/navbar">
            <IconBrandJustd className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
            <ThemeSwitcher appearance="plain" />
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </Navbar.Flex>
      </Navbar.Compact>
    </Navbar>
  );
}

const categories = [
  {
    id: 1,
    label: "Documentation",
    url: "https://getjustd.com/button",
  },
  {
    id: 2,
    label: "Colors",
    url: "https://getjustd.com/colors",
  },
  {
    id: 3,
    label: "Themes",
    url: "https://getjustd.com/themes",
  },
  {
    id: 4,
    label: "Blocks",
    url: "https://getjustd.com/blocks",
  },
  {
    id: 5,
    label: "Icons",
    url: "https://getjustd.com/icons",
  },
];

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar alt="cobain" size="small" initials="KC" shape="square" />
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </Menu.Header>
        </Menu.Section>

        <Menu.Item href="#dashboard">
          <IconDashboard />
          Dashboard
        </Menu.Item>
        <Menu.Item href="#settings">
          <IconSettings />
          Settings
        </Menu.Item>
        <Menu.Item href="#security">
          <IconShield />
          Security
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          Command Menu
        </Menu.Item>

        <Menu.Item href="#contact">
          <IconHeadphones />
          Customer Support
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item href="#logout">
          <IconLogout />
          Log out
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
