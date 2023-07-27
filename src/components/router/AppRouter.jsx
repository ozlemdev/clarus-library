const AppRouter = () => {
  return (
    <BrowserRouter>
      <navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />

        <Route element={<PrivateRouter />}>
          <Route path="/abouth" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
