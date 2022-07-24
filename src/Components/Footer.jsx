import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import {AiOutlineMail} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';
import {MdPhoneInTalk} from 'react-icons/md';
import { useState } from 'react';
//import {GooglemAP, useLoadScript, Marker} from '@react-google-maps/api';
export const Footer = () => {
    const suppliers = [
        {label: 'Supplier 1', value: 'supplier1'},
        {label: 'Supplier 2', value: 'supplier2'},
        {label: 'Supplier 3', value: 'supplier3'},
    ]
    const DBSuppliers = ['supplier1', 'supplier2', 'supplier3']
    const handleSelectChange = ( {value} ) => {
        console.log(value);
    }
//Google maps no fue implementado por falta de presupuesto.
  return (
    <MDBFooter className='text-lg-left bgFooter '>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Sitios Amigos</h5>

            <ul className='list-unstyled mb-0'>
                <li>
                    <a className='footer-link' href='https://cl.clonline.org/'>
                        Comunión y Liberación
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='https://www.educarchile.cl/ech/pro/app/home'>
                        EducarChile
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='https://www.edudown.cl/'>
                        Edudown
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='https://www.fullcollege.cl/fullcollege/'>
                        FullCollege
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='https://www.tne.cl/'>
                        Pase escolar
                    </a>
                </li>

            </ul>
            <br/>
            <br/>
            <ul className='list-unstyled'>
               <AiOutlineMail/> Correos electrónicos
                <li>
                Inspectoría General: 
                <br/>
                <b>inspectoriageneral@ispm.cl</b>
                </li>
                <li>
                    Asistente Social:
                    <br/>
                   <b> asistentesocial2020@ispm.cl</b>
                </li>
                <li>
                    Recaudación:
                    <br/>
                    <b>recaudacion@ispm.cl</b>
                </li>
            </ul>
       </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled'>
            <BiWorld/><b>Dirección: Sede Central</b>
            <br/>
            Barros Arana # 758. San Bernardo-Chile
            <br/>
            <MdPhoneInTalk/>Teléfono: +56 9 63035276
            <br/>
            Horario Atención: Lunes a Viernes   
            <br/>
            08:00-13:30 y 14:30-19:00 hrs.
            <br/>
            Correo Electrónico: secretaria@ispm.cl
            <br/>
            </ul>
            <br />
            <ul className='list-unstyled'>
            <BiWorld/><b>Dirección: San Pablito</b>
            <br/>
            Barros Arana # 848. San Bernardo-Chile
            <br/>
            <MdPhoneInTalk/>Teléfono: 22 859 31 37
            <br/>
            Correo Electrónico: secretariajardin@ispm.cl
            <br/>
            </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled'>
            <BiWorld/><b>Dirección: Sede 1° y 4° Básicos</b>
            <br/>
            Barros Arana # 848. San Bernardo-Chile
            <br/>
            <MdPhoneInTalk/>Teléfono: 22 324 45 82
            <br/>
            Horario Atención: Lunes a Viernes   
            <br/>
            08:00-13:30 y 14:30-19:00 hrs.
            <br/>
            Correo Electrónico: secretaria@ispm.cl
            <br/>
            </ul>
            <br />
            <ul className='list-unstyled'>
            <BiWorld/><b>Dirección: Sede 7° y 8° Básicos</b>
            <br/>
            Barros Arana # 983. San Bernardo-Chile
            <br/>
            <MdPhoneInTalk/>Teléfono: 22 859 76 80
            <br/>
            </ul>
            </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
            Instituto San Pablo Misionero
        </a>
      </div>
    </MDBFooter>
  );
}