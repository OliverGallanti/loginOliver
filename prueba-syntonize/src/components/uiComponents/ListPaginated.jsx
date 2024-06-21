import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Pagination from "./Pagination";
import ListElements from "./ListElements";
import { useNotification } from "../../context/NotificationContext";
import PageElementSelector from "./PageElementSelector";

const ListPaginated = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;
  if (error) return showNotification("error loading", "error", true);

  const showDescription = (item) => {
    setDescription(item);
    setModal(true);
  };

  return (
    <div>
      <ul className="flex flex-col gap-2 w-[36vw] min-h-[504px] max-h-[512px] overflow-y-auto overflow-x-hidden">
        {currentItems.map((item) => (
          <ListElements
            key={item.id}
            item={item}
            showDescription={showDescription}
          />
        ))}
      </ul>
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        title={description.title}
      >
        {description.body}
      </Modal>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        handleClick={handleClick}
      />
      <PageElementSelector
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default ListPaginated;
