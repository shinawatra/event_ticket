import TicketSelection from './component/TicketSelection';
import Layout from './Layout';
import Attendee from './component/Attendee';
import BookedTicket from './component/BookedTicket';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router';
import DataProvider from './DataProvider';

function App() {
  return (
    <HashRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TicketSelection />} />
            <Route path="Attendee" element={<Attendee />} />
            <Route path="BookedTicket" element={<BookedTicket />} />
          </Route>
        </Routes>
      </DataProvider>
    </HashRouter>
  );
}

export default App;

//<BrowserRouter basename="/event_ticket/"></BrowserRouter>
