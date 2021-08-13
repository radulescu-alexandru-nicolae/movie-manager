package com.example.filmebackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.swing.*;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Movie {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        Long id;
        private String title;
        private String director;
        private String cast;
        private byte[] content;
        private int duration_min;
        private String descriere;


        public  String image(){

                return Base64.getMimeEncoder().encodeToString(content);
        }





}
