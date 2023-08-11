const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'assets/images/coding-event.jpeg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'assets/images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'assets/images/extrovert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Artisan Chocolate Tasting',
    description:
      'Indulge your senses in a delightful evening of artisanal chocolate tasting. Explore a variety of handcrafted chocolates from around the world.',
    location: 'Cocoa Haven, 123 Sweet Street, Chocoville',
    date: '2023-05-20',
    image: 'assets/images/chocolate-tasting-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Mindfulness Meditation Workshop',
    description:
      'Learn the art of mindfulness and meditation in this interactive workshop. Discover techniques to reduce stress, and enhance focus.',
    location: 'Serenity Hall, 789 Tranquil Avenue, Zen City',
    date: '2023-09-15',
    image: 'assets/images/meditation-workshop.jpg',
    isFeatured: false,
  },
  {
    id: 'e6',
    title: 'Tech Innovators Conference',
    description:
      'Join industry leaders, tech enthusiasts, and innovators from around the world to explore the latest trends in technology and discuss groundbreaking ideas.',
    location: 'InnoTech Center, 456 Innovation Parkway, Techville',
    date: '2023-11-08',
    image: 'assets/images/tech-conference.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id);
}
