import React from 'react';

const LocalContacts = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Local Offices & Contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Tokyo Office</h3>
          <p>1-1-1 Marunouchi, Chiyoda-ku, Tokyo</p>
          <p>Phone: <a href="tel:+81312345678" className="text-blue-500 hover:underline">+81 3 1234 5678</a></p>
          <p>WhatsApp: <a href="https://wa.me/81312345678" className="text-blue-500 hover:underline">Chat Now</a></p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Berlin Office</h3>
          <p>Unter den Linden 77, 10117 Berlin</p>
          <p>Phone: <a href="tel:+493098765432" className="text-blue-500 hover:underline">+49 30 9876 5432</a></p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">São Paulo Office</h3>
          <p>Av. Paulista, 1000, Bela Vista, São Paulo</p>
          <p>Phone: <a href="tel:+551123456789" className="text-blue-500 hover:underline">+55 11 2345 6789</a></p>
          <p>WhatsApp: <a href="https://wa.me/551123456789" className="text-blue-500 hover:underline">Chat Now</a></p>
        </div>
      </div>
    </section>
  );
};

export default LocalContacts;
