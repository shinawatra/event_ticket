import TicketSelection from './component/TicketSelection';
import Layout from './Layout';
import Attendee from './component/Attendee';
import BookedTicket from './component/BookedTicket';
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from 'react-router';
import DataProvider from './DataProvider';

function App() {
  return (
    <BrowserRouter basename="/event_ticket/">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TicketSelection />} />
            <Route path="/Attendee" element={<Attendee />} />
            <Route path="/BookedTicket" element={<BookedTicket />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
