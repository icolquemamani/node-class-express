import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'roles',
})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 50, nullable: false})
  name: string;

  @Column({ type: 'varchar', length: 250})
  description: string;
}