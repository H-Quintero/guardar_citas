//Children en vez del nombre del prop y pasas todo el codigo html que quieras

const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="bg-red-600 text-white text-center p-3 rounded-lg uppercase mb-5 text-sm font-bold">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
