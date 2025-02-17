---
sidebar_position: 5
---

# Proposed Application Design #

The application will consist of two parts. There will be a frontend web-based application component and a backend application component running on the network. The backend application will be waiting for print jobs from the client / user. The front end GUI application will consist of Java scripting and web components, and the backend application will be completed in Python. As of this writing, we were proposing our application components to run on the customer's choice of hardware such as Windows, OS X or such hardware as the Raspberry Pie with network capability. The backend application will interface with OctoPrint API services installed on the choice of hardware.

For this project, we will choose Windows-based hardware as our platform for the backend application and the frontend application will be Web based, therefore most popular OS should be able to load that component.

Below is some sample code for transferring files in Python. This was an auto generated program when I did a search for file transfer or socket libraries. 

```aiignore
import socket
import os

def send_file(filename, host, port):
    s = socket.socket()
    s.connect((host, port))
    filesize = os.path.getsize(filename)
    s.send(f"{filename}{SEPARATOR}{filesize}".encode())
    with open(filename, "rb") as f:
        while True:
            bytes_read = f.read(BUFFER_SIZE)
            if not bytes_read:
                break
            s.sendall(bytes_read)
    s.close()

def receive_file(host, port, save_path):
    s = socket.socket()
    s.bind((host, port))
    s.listen(5)
    client_socket, address = s.accept()
    received = client_socket.recv(BUFFER_SIZE).decode()
    filename, filesize = received.split(SEPARATOR)
    filename = os.path.basename(filename)
    filesize = int(filesize)
    with open(os.path.join(save_path,filename), "wb") as f:
        bytes_received = 0
        while bytes_received < filesize:
            l = client_socket.recv(BUFFER_SIZE)
            f.write(l)
            bytes_received += len(l)
    client_socket.close()
    s.close()

SEPARATOR = "<SEPARATOR>"
BUFFER_SIZE = 4096
```