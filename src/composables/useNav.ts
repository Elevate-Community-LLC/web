import { ref } from 'vue'

export interface NavLink {
  name: string
  type: 'link'
  module: string
  hrefType: 'internal' | 'external'
  href: string
}

export interface NavDrop {
  name: string
  type: 'drop'
  module: string
  items: NavLink[]
}

export interface Nav {
  items: (NavLink | NavDrop)[]
}

const nav = ref<Nav>({
  items: [],
})

export function useNav() {
  return nav
}

export function initNav() {
  nav.value.items = [
    {
      name: 'Services',
      type: 'drop',
      module: 'home',
      items: [
        {
          name: 'Solar Expertise',
          type: 'link',
          module: 'home',
          href: '/services/solar-expertise',
          hrefType: 'internal',
        },
        {
          name: 'Implementation',
          type: 'link',
          module: 'home',
          href: '/services/implementation',
          hrefType: 'internal',
        },
        {
          name: 'Integration',
          type: 'link',
          module: 'home',
          href: '/services/integration',
          hrefType: 'internal',
        },
        {
          name: 'Optimization',
          type: 'link',
          module: 'home',
          href: '/services/optimization',
          hrefType: 'internal',
        },
        {
          name: 'Customization',
          type: 'link',
          module: 'home',
          href: '/services/customization',
          hrefType: 'internal',
        },
      ],
    },
    {
      name: 'Platforms',
      type: 'drop',
      module: 'home',
      items: [
        {
          name: 'Sales',
          type: 'link',
          module: 'home',
          href: '/platforms/sales',
          hrefType: 'internal',
        },
        {
          name: "Work Management",
          type: 'link',
          module: 'home',
          href: '/platforms/work-management',
          hrefType: 'internal',
        },
        {
          name: 'Field Operations',
          type: 'link',
          module: 'home',
          href: '/platforms/field-operations',
          hrefType: 'internal',
        },
        {
          name: 'Finance & Accounting',
          type: 'link',
          module: 'home',
          href: '/platforms/finance-accounting',
          hrefType: 'internal',
        },
      ],
    },
    {
      name: 'Products',
      type: 'drop',
      module: 'home',
      items: [
        {
          name: 'Salesforce',
          type: 'link',
          module: 'home',
          href: '/products/salesforce',
          hrefType: 'internal',
        },
        {
          name: "Procore",
          type: 'link',
          module: 'home',
          href: '/products/procore',
          hrefType: 'internal',
        },
        {
          name: 'Sage',
          type: 'link',
          module: 'home',
          href: '/products/sage',
          hrefType: 'internal',
        },
        {
          name: 'Workato',
          type: 'link',
          module: 'home',
          href: '/products/workato',
          hrefType: 'internal',
        },
      ],
    },
    {
      name: 'About',
      type: 'link',
      module: 'home',
      href: '/about',
      hrefType: 'internal',
    },
  ]
}
