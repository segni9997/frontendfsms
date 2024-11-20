import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./dashboard/About";
import { Contact } from "./dashboard/Contact";
import { ForgotPassword } from "./component/Include/ForgotPassword";
import { PdashBoard } from "./component/pilot/PdashBoard";
import { Flight } from "../src/component/Admin/Flight";
import { History } from "./dashboard/History";
import { NotifyArrival } from "./component/pilot/NotifyArrival";
import More from "./dashboard/More";
import { AirCraftMaintenance } from "./component/technician/AirCraftMaintenance";
import MedicalRequest from "./component/Include/MedicalRequest";
import ManageAirCrafts from "./component/Admin/ManageAirCrafts";
import AddAirCraft from "./component/Admin/AddAirCraft";
import Message from "./component/Admin/Message";
import { ManageFlight } from "./component/Admin/ManageFlight";
import { AirCraftRequest } from "./component/treasury/AirCraftRequest";
import { OrderList } from "./component/treasury/OrderList";
import { Aircraftnav } from "./component/Admin/Aircraftnav";
import { AllAircraft } from "./component/Admin/AllAircraft";
import { Pending } from "./component/Admin/Pending";
import { Ready } from "./component/Admin/Ready";
import { AllrequestedairCraft } from "./component/treasury/AllrequestedAirCraft";
import { RequestAccepted } from "./component/treasury/RequestAccpted";
import { Declined } from "./component/treasury/Declined";
import { PendingFlight } from "./component/Admin/PendingFlight";
import { ArrivedFlight } from "./component/Admin/ArrivedFlight";
import { DepartedFlight } from "./component/Admin/DepartedFlight";
import { RegisterUser } from "./component/Admin/RegisterUser";
import { GetUsers } from "./component/Admin/GetUsers";
import { GetPilot } from "./component/Admin/GetPilot";
import { GetCopilot } from "./component/Admin/GetCopilot";
import { GetCabin } from "./component/Admin/GetCabin";
import { GetTechnician } from "./component/Admin/GetTechnician";
import { Header } from "./dashboard/Header";
import { PilotsFlight } from "./component/pilot/PilotsFlight";
import { CFlight } from "./component/cabin/CFlight";
import { GetAdmin } from "./component/Admin/GetAdmin";
import { Body } from "./component/Home/Body";
import { Logout } from "./component/Home/Logout";
import { Assigned } from "./component/cabin/Assigned";
import { Arrived } from "./component/cabin/Arrived";
import { Departed } from "./component/cabin/Departed";
import { TAssigned } from "./component/technician/TAssigned";
import { TDeparted } from "./component/technician/TDeparted";
import { TArrived } from "./component/technician/TArrived";
import { UserProfile } from "./component/Include/UserProfile";
import TimeOut from "./component/Include/TimeOut";
import { IataInfo } from "./component/Admin/IataInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PdashBoard" element={<PdashBoard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/admin/flight" element={<Flight />} />
        <Route path="/History" element={<History />} />
        <Route
          path="/Pilot/arrivalverfication"
          element={<NotifyArrival />}
        />{" "}
        <Route path="/include/medicalrequest" element={<MedicalRequest />} />
        <Route path="/More" element={<More />} />
        <Route
          path="/technician/AirCraftMaintenance"
          element={<AirCraftMaintenance />}
        />
        <Route path="/pilot/flight" element={<PilotsFlight />} />
        <Route path="/admin/allusers" element={<GetUsers />} />
        <Route path="/admin/allPilots" element={<GetPilot />} />
        <Route path="/admin/allCoPilots" element={<GetCopilot />} />
        <Route path="/admin/allCabinCrew" element={<GetCabin />} />
        <Route path="/admin/allTechnican" element={<GetTechnician />} />
        <Route path="/Flight/PendingFlight" element={<PendingFlight />} />
        <Route path="/Flight/ArrivedFlight" element={<ArrivedFlight />} />
        <Route path="/Flight/DepartedFlight" element={<DepartedFlight />} />
        <Route path="/admin/ManageAirCrafts" element={<ManageAirCrafts />} />
        <Route path="/admin/addAircraft" element={<AddAirCraft />} />
        <Route path="/Contactmsg" element={<Message />} />
        <Route path="/admin/ManageFlight/:airid" element={<ManageFlight />} />
        <Route path="/orderaircraft" element={<OrderList />} />
        <Route path="/aircraftinfo/" element={<Aircraftnav />} />
        <Route path="/aircraft/allaircraft" element={<AllAircraft />} />
        <Route path="/aircraft/pendingaircraft" element={<Pending />} />
        <Route path="/aircraft/readyaircraft" element={<Ready />} />
        <Route
          path="/treasury/allrequestedairCraft"
          element={<AllrequestedairCraft />}
        />
        <Route
          path="/admin/allrequestedaircrafts"
          element={<AirCraftRequest />}
        />
        <Route path="/admin/IataInfo" element= {<IataInfo/>}/>
        <Route path="/admin/admins" element={<GetAdmin />} />
        <Route path="/cabin/flights/" element={<CFlight />} />
        <Route path="/admin/Registeruser" element={<RegisterUser />} />
        <Route
          path="/aircraft/requestaccpted"
          element={<RequestAccepted />}
        />{" "}
        <Route path="/timeout" element={<TimeOut />} />
        <Route path="/aircraft/requestdeclined" element={<Declined />} />
        <Route path="flight/cabin/assigned" element={<Assigned />} />
        <Route path="/flight/cabin/arrived" element={<Arrived />} />
        <Route path="/flights/cabin/departed" element={<Departed />} />
        <Route path="/flight/techncain/assigned" element={<TAssigned />} />
        <Route path="/flight/techncain/arrived" element={<TArrived />} />
        <Route path="/flight/techncain/departed" element={<TDeparted />} />
        <Route path="/userdetail" element={<UserProfile />} />
        <Route path="/header/" element={<Header />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
