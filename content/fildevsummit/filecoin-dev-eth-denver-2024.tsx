import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_ETH_DENVER_2024_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit - ETHDenver',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>This event takes place on February 29th, 2024, at The Slate Denver.",
};

export const FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_ETH_DENVER = {
  airtable: {
    endPoint: 'airtable/ethdenver',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_ETH_DENVER_2024_PAGE_CONTENT = [
  {
    id: 'tickets',
    title: 'Register to Attend',
    direction: 'row',
    block: [
      {
        type: BlockTypeEnum.TICKET_CARD,
        backgroundColor: 'white',
        textColor: 'black',
        tickets: [
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '$20',
            name: 'FIL Dev Summit ETHDenver 2024',
            backgroundColor: 'white',
            textColor: 'black',
            description: 'Register for ETHDenver FIL Dev Summit.',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/FDS-EthDenver',
            },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    cta: {
      type: CallToActionVariantEnum.BORDER,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Sponsor FIL Dev Summit ETHDenver 2024',
      link: 'https://airtable.com/appHcADfPc1dtLsTL/shrLacwJyqpPubZwF',
    },
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logosLarge: [
          {
            src: '/media/protocollabs.png',
            href: 'https://protocol.ai/',
          },
          {
            src: 'https://i.ibb.co/Dt6G116/logo-black-text.png',
            href: 'https://web3mine.io/',
          },
          {
            src: '/media/ff-logo2.png',
            href: 'https://fil.org/',
          },
        ],
      },
    ],
  },
  {
    id: 'eth-denver',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'ETHDenver',
          description: 'Feb 29th, 2024',
          smallDesc: 'Organized by Miwa',
          image: {
            alt: 'eth-denver-fil-dev-summit',
            src: '/media/denver-full.jpg',
          },
        },
      },
    ],
  },
  {
    id: 'schedule-ethdenver',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Event Schedule',
    description: 'Please submit a talk if you would like to speak!',
    cta: {
      type: CallToActionVariantEnum.BORDER,
      textColor: 'var(--color-blue)',
      target: '_blank',
      text: 'View the Schedule in a List',
      buttonColor: 'white',
      link: '/FDS-3/list',
    },
    cta2: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Submit a Talk for FDS @ ETHDenver',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: 'https://airtable.com/appHcADfPc1dtLsTL/shrJKBdQLs9Vvm5HE',
    },

    block: [
      {
        type: BlockTypeEnum.SCHEDULE_ETHDENVER,
        scheduleData: FIL_DEV_SUMMIT_ETH_DENVER,
      },
    ],
  },

  {
    id: 'faqs',
    title: 'FAQs',
    direction: BlockDirectionEnum.TWO_COLUMN,
    block: [
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is FIL Dev Summit @ ETHDenver 2024?',
            collapsedText:
              'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). At EthDenver 2024, FIL Dev Summit will host discuss hot topics around storage & aggregation L2s and how these technologies are revolutionizing decentralized data storage and access in the blockchain space. We will dive into workshops on FIL+ allocator tooling & design, learn about the innovative approaches to enhancing data retrieval speeds and reliability on Filecoin, and gain insights & best practices shared by leading web3 storage clients, as well as onramps. Passionate about decentralized tech? Join us at FIl Dev Summit at EthDenver, or if you can’t make it, sponsor our event!',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the goal of FIL Dev Summit?',
            collapsedText:
              'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for the rest of this year. ',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `Add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue FIL Dev Summit @ Eth Denver?',
            collapsedText: 'The Slate Denver: 1250 Welton St, Denver, CO 80204, United States. Don’t forget to register to attend. You’ll be able to register at check-in',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Is there a cost to attend?',
            collapsedText: `Yes, tickets are $20. Please register to reserve your seat!`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'Yes! We offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appHcADfPc1dtLsTL/shrLacwJyqpPubZwF) for more information on what is included in each sponsorship.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Will the sessions be recorded?',
            collapsedText:
              'All sessions will be recorded and uploaded to [Youtube channel](https://www.youtube.com/@IPFSbot) ASAP. We are also encouraging everyone to join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) slack to stay up to date with all hallway track conversations.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Code of Conduct',
            collapsedText: ` We will be following the following [Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
    ],
  },
];

export const FOOTER_FILECOIN_DEV_SUMMIT_CONTENT = {
  links: [
    {
      href: 'https://discuss.ipfs.tech/privacy',
      name: 'Privacy Policy',
    },
    {
      href: 'https://discuss.ipfs.tech/tos',
      name: 'Terms & Conditions',
    },
    {
      href: 'https://ipfs.tech/legal/',
      name: 'DMCA Policy',
    },
  ],
  source: [
    {
      href: 'https://github.com/application-research/fildevsummit',
    },
  ],
};

export const FIL_DEV_SUMMIT_ETH_DENVER_2024_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    {
      name: 'Schedule',
      href: '#schedule-ethdenver',
    },
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
  cta: [
    {
      text: 'Register to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: 'https://lu.ma/FDS-EthDenver',
      target: '_blank',
    },
  ],
};

export const FDS_3_LIST_CONTENT = [
  {
    id: 'eth-denver',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-3: ETH Denver Schedule',
    // cta: {
    //   type: CallToActionVariantEnum.BUTTON,
    //   textColor: 'white',
    //   target: '_blank',
    //   text: 'Showcase Your Project at the EXPO',
    //   buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    //   link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
    // },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE,
        scheduleData: FIL_DEV_SUMMIT_ETH_DENVER,
        // airtable: {
        //   // tableName: 'Asia Talk Track Submissions + Forms',
        //   endPoint: 'airtable/eth',
        //   host: 'internet-apis.onrender.com',
        //   data: [],
        // },
      },
    ],
  },
];
