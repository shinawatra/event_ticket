import TicketSelection from './component/TicketSelection';
import Layout from './Layout';
import Attendee from './component/Attendee';
import BookedTicket from './component/BookedTicket';
import { BrowserRouter, Route, Routes } from 'react-router';
import DataProvider from './DataProvider';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TicketSelection />} />
            <Route path="attendee" element={<Attendee />} />
            <Route path="bookedTicket" element={<BookedTicket />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
