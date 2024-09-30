import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Typeuser } from 'src/typeuser/entities/typeuser.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    UsersId: number;

    @Column({length: 100,})
    FirstName: string;

    @Column({length: 100,})
    LastName: string;

    @Column({ type: 'date' })
    DoB: Date;

    @Column({length: 15,})
    PhoneNumber: string;

    @Column({length: 250,})
    StreetAddress: string;

    @Column({length: 250,})
    Email: string;

    @ManyToOne(() => Typeuser, { nullable: false })
    @JoinColumn({ name: 'TypeUserId' })
    TypeUserId: Typeuser;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
